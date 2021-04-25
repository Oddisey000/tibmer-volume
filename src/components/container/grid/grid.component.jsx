import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import BasicTextFields from "../text-fields/text.fields.component";
import AddButtonComponent from "../add-button/add-button.component";
import EnhancedTable from "../data-table/data.table.component";
import SimplePaper from "../results-block/results.block.component";

// Import data and redux functions
import { volumeDataStandard, VolumeDataISO } from "../../shared/data";
import { getVolumeData } from "../../../redux/app-reducer/app-reducer.actions";

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

// When user click away (usualy near the + button) this will unselect all the items inside table
const handleClick = () => {
  console.log("onClickOutside() method called");
};

const AppGridComponent = ({ appData }) => {
  const classes = useStyles();

  const displayData = appData.appReducer.appHasData ? (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SimplePaper />
      </Grid>
      <Grid item xs={12}>
        <BasicTextFields { ...appData } />
      </Grid>
      <Grid onClick={handleClick} item xs={12}>
        <AddButtonComponent />
      </Grid>
      <Grid item xs={12}>
        <EnhancedTable { ...appData } />
      </Grid>
    </Grid>
  ) : (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <BasicTextFields { ...appData } />
      </Grid>
      <Grid onClick={handleClick} item xs={12}>
        <AddButtonComponent />
      </Grid>
    </Grid>
  );

  return <div className={classes.root}>{displayData}</div>;
};

const mapStateToProps = (state) => {
  return {
    appData: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVolumeData: dispatch(getVolumeData(volumeDataStandard, VolumeDataISO))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppGridComponent);
