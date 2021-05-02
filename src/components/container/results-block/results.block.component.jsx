import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      width: "49%",
      margin: theme.spacing(0.1),
      backgroundColor: "whitesmoke",
      color: "#f57c00",
      marginBottom: "-20px"
    }
  }
}));

export default function SimplePaper({...appData}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined">
        <p>{Math.round(appData.appReducer.calculatedData.calculatedSummary.volume * 100) / 100} м&sup3;</p>
      </Paper>
      <Paper variant="outlined">
        <p>{Math.round(appData.appReducer.calculatedData.calculatedSummary.price)} &sum;</p>
      </Paper>
    </div>
  );
}
