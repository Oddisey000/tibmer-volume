import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


const columns = [
  { id: 'name', minWidth: 5 },
  { id: 'code', label: 'Діаметр', minWidth: 5 },
  {
    id: 'population',
    label: 'Довжина',
    minWidth: 5,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Кількість',
    minWidth: 5,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Ціна',
    minWidth: 5,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData(<DeleteIcon fontSize="small" />, 'IN', 21, 32),
  createData(<DeleteIcon fontSize="small" />, 'CN', 11, 34),
  createData(<DeleteIcon fontSize="small" />, 'IT', 23, 32),
  createData(<DeleteIcon fontSize="small" />, 'US', 21, 12),
  createData(<DeleteIcon fontSize="small" />, 'CA', 23, 23),
  createData(<DeleteIcon fontSize="small" />, 'AU', 32, 21),
  createData(<DeleteIcon fontSize="small" />, 'DE', 21, 23),
  createData(<DeleteIcon fontSize="small" />, 'IE', 23, 23),
  createData(<DeleteIcon fontSize="small" />, 'MX', 21, 21),
  createData(<DeleteIcon fontSize="small" />, 'JP', 23, 23),
  createData(<DeleteIcon fontSize="small" />, 'FR', 34, 23),
  createData(<DeleteIcon fontSize="small" />, 'GB', 21, 21),
  createData(<DeleteIcon fontSize="small" />, 'RU', 23, 23),
  createData(<DeleteIcon fontSize="small" />, 'NG', 12, 21),
  createData(<DeleteIcon fontSize="small" />, 'BR', 12, 23),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    marginTop: 10,
    maxHeight: 400,
  },
});

export default function DataTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
