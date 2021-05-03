import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import { ClickAwayListener } from '@material-ui/core';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import { addOrEdit, setTableSelectedElements, deleteItemsFromTable, saveIndexToEdit } from "../../../redux/app-reducer/app-reducer.actions";

// Declare array which will contaigne positions to delete from data array
let indexesToDelete = [];
let appDataVar;
let selectedLanguage;
let tableLabels;
let rows;

const takeAppData = (appData) => {
  return (appDataVar = appData);
};

const takeAppLanguage = (appData) => {
  return (selectedLanguage = appData.appReducer.appLanguage);
};

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "diametr",
    numeric: false,
    disablePadding: true
  },
  { id: "length", numeric: true, disablePadding: true },
  { id: "quantity", numeric: true, disablePadding: true },
  { id: "volume", numeric: true, disablePadding: false },
  { id: "price", numeric: true, disablePadding: false }
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label":
                appDataVar.appReducer.languages[selectedLanguage].calculation
                  .checkboxInputProps
            }}
          />
        </TableCell>
        {headCells.map((headCell, index) => (
          <TableCell
            key={index}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {tableLabels[headCell.id]}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  title: {
    flex: "1 1 100%"
  }
}));

const EnhancedTableToolbar = (props) => {
  tableLabels = {
    diametr:
      appDataVar.appReducer.languages[selectedLanguage].calculation.diametr,
    length:
      appDataVar.appReducer.languages[selectedLanguage].calculation.length,
    quantity:
      appDataVar.appReducer.languages[selectedLanguage].calculation.quantity,
    volume:
      appDataVar.appReducer.languages[selectedLanguage].calculation.volume,
    price: appDataVar.appReducer.languages[selectedLanguage].calculation.price
  };

  const classes = useToolbarStyles();
  const { numSelected, deleteItemsFromTable, addOrEdit, setSelected } = props;

  // Handle deletion of array element
  const handleDelete = () => {
    deleteItemsFromTable(appDataVar.appReducer.calculatedData.calculatedResults, appDataVar.appReducer.setTableSelectedElements);
    rows = appDataVar.appReducer.calculatedData.calculatedResults.length
      ? appDataVar.appReducer.calculatedData.calculatedResults
      : [];
    addOrEdit(false);
    setSelected([]);
  };

  return (    
  <Toolbar
    className={clsx(classes.root, {
      [classes.highlight]: numSelected > 0
    })}
  >
    {numSelected > 0 ? (
      <Typography
        className={classes.title}
        color="inherit"
        variant="subtitle1"
        component="div"
      >
        {numSelected}{" "}
        {
          appDataVar.appReducer.languages[selectedLanguage].calculation
            .numSelected
        }
      </Typography>
    ) : (
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {appDataVar.appReducer.languages[selectedLanguage].calculation.title}
      </Typography>
    )}

    {numSelected > 0 ? (
        <IconButton
          onClick={handleDelete}
          aria-label={
            appDataVar.appReducer.languages[selectedLanguage].calculation
              .deleteItems
          }
        >
          <DeleteIcon />
        </IconButton>
    ) : (
      <div></div>
    )}
  </Toolbar>
);
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(1)
  },
  table: {
    maxWidth: "100%"
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  },
  tableHeigth: {
    maxHeight: "30vh"
  }
}));

const AppGridComponent = ({ appData, addOrEdit, setTableSelectedElements, deleteItemsFromTable, saveIndexToEdit }) => {
  takeAppData(appData);
  takeAppLanguage(appData);

  const handleClickAway = () => {
    setSelected([]);
  }

  rows = appData.appReducer.calculatedData.calculatedResults.length
    ? appData.appReducer.calculatedData.calculatedResults
    : [];

  const fillInInputs = (itemId) => {
    if (itemId > -1) {
      const elementToEdit = appData.appReducer.calculatedData.calculatedResults[itemId];

      document.getElementById("diameter").value = elementToEdit.diametr;
      document.getElementById("length").value = elementToEdit.length;
      document.getElementById("quantity").value = elementToEdit.quantity;

      saveIndexToEdit(itemId);
    } else {
      document.getElementById("diameter").value = null;
      document.getElementById("length").value = null;
      document.getElementById("quantity").value = null;
    }
  };

  const clearInputs = () => {
    document.getElementById("diameter").value = null;
    document.getElementById("length").value = null;
    document.getElementById("quantity").value = null;
  };

  const setTableSelected = (item) => {
    setTableSelectedElements(item);
    //console.log(item);
  }

  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      setTableSelected(newSelecteds);

      document.getElementById("diameter").value = null;
      document.getElementById("length").value = null;
      document.getElementById("quantity").value = null;

      addOrEdit(false);

      return;
    }
    addOrEdit(false);
    setSelected([]);    
    setTableSelected([]);

    document.getElementById("diameter").value = null;
    document.getElementById("length").value = null;
    document.getElementById("quantity").value = null;
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
    setTableSelected(newSelected);
    
    if (!newSelected) (addOrEdit(false));
    newSelected.length === 1 ? addOrEdit(true) : addOrEdit(false);
    if (newSelected.length === 1) {
      fillInInputs(newSelected[0]);
    } else {
      clearInputs();
      setTableSelected([]);
    }
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar 
            numSelected={selected.length} 
            deleteItemsFromTable={deleteItemsFromTable}
            setSelected={setSelected}
            addOrEdit={addOrEdit} />
          <TableContainer className={classes.tableHeigth}>
            <Table
              stickyHeader
              className={classes.table}
              aria-labelledby="tableTitle"
              size={"medium"}
              aria-label="sticky table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(
                  appData.appReducer.calculatedData.calculatedResults.length
                  ? appData.appReducer.calculatedData.calculatedResults
                  : [], getComparator(order, orderBy))
                  .map(
                  (row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={index}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.diametr}
                        </TableCell>
                        <TableCell align="right">{row.length}</TableCell>
                        <TableCell align="right">{row.quantity}</TableCell>
                        <TableCell align="right">{row.volume}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                      </TableRow>
                    );
                  }
                )}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </ClickAwayListener>
  );
};

const mapStateToProps = (state) => {
  return {
    appData: { ...state }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addOrEdit: (item) => dispatch(addOrEdit(item)),
    setTableSelectedElements: (dataArr) => dispatch(setTableSelectedElements(dataArr)),
    deleteItemsFromTable: (dataArray, indexesToDelete) => dispatch(deleteItemsFromTable(dataArray, indexesToDelete)),
    saveIndexToEdit: (item) => dispatch(saveIndexToEdit(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppGridComponent);
