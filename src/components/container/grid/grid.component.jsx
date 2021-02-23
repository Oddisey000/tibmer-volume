import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import BasicTextFields from "../text-fields/text.fields.component";
import AddButtonComponent from "../add-button/add-button.component";
import DataTableComponent from "../data-table/data.table.component";

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

export default function AppGridComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BasicTextFields />
        </Grid>
        <Grid item xs={12}>
          <AddButtonComponent />
        </Grid>
        <Grid item xs={12}>
          <DataTableComponent />
        </Grid>
      </Grid>
    </div>
  );
}
