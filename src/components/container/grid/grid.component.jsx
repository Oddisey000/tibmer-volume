import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import BasicTextFields from "../text-fields/text.fields.component";
import AddButtonComponent from "../add-button/add-button.component";
import EditButtonComponent from "../edit-button/edit-button.component";
import EnhancedTable from "../data-table/data.table.component";
import SimplePaper from "../results-block/results.block.component";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 10
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const AppGridComponent = ({ appData }) => {
  // When user click away (usualy near the + button) this will unselect all the items inside table
  const handleClick = () => {
    //console.log("onClickOutside() method called");
  };

  const classes = useStyles();

  // Conditionaly display edit or add button
  const displayButton = appData.appReducer.editMode ? (
    <EditButtonComponent />
  ) : (
    <AddButtonComponent />
  );
  const displayResults = appData.appReducer.appHasData ? (
    <Grid item xs={12}>
        <SimplePaper { ...appData } />
    </Grid>
  ) : (
    null
  );
  const displayDataTable = appData.appReducer.appHasData ? (
    <Grid item xs={12}>
        <EnhancedTable />
      </Grid>
  ) : (
    null
  );

  const displayData = (
    <Grid container spacing={3}>
      {displayResults}
      <Grid item xs={12}>
        <BasicTextFields />
      </Grid>
      <Grid onClick={handleClick} item xs={12}>
        {displayButton}
      </Grid>
        {displayDataTable}
    </Grid>
  );

  return <div className={classes.root}>{displayData}</div>;
};

const mapStateToProps = (state) => {
  return {
    appData: { ...state }
  };
};

export default connect(mapStateToProps)(AppGridComponent);
