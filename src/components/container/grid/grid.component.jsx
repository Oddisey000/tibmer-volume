import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import BasicTextFields from "../text-fields/text.fields.component";
import AddButtonComponent from "../add-button/add-button.component";
import DataTableComponent from "../data-table/data.table.component";
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

// When user click away (usualy near the + button) this will unselect all the items inside table
const handleClick = () => {
  console.log("onClickOutside() method called");
};

export default function AppGridComponent({ settings }) {
  const classes = useStyles();
  // Testing
  console.log(settings);

  const displayData = settings.settings.appHasData ? (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SimplePaper />
      </Grid>
      <Grid item xs={12}>
        <BasicTextFields />
      </Grid>
      <Grid onClick={handleClick} item xs={12}>
        <AddButtonComponent />
      </Grid>
      <Grid item xs={12}>
        <DataTableComponent />
      </Grid>
    </Grid>
  ) : (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <BasicTextFields />
      </Grid>
      <Grid onClick={handleClick} item xs={12}>
        <AddButtonComponent />
      </Grid>
    </Grid>
  );

  return <div className={classes.root}>{displayData}</div>;
}
