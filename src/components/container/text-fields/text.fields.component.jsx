import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "18ch",
      maxWidth: 120
    }
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField type="number" id="standard-basic" label="Діаметр см" />
      <TextField type="number" id="standard-basic" label="Довжина м" />
      <TextField type="number" id="standard-basic" label="Кількість" />
      <TextField
        type="number"
        id="outlined-basic"
        label="Ціна"
        variant="outlined"
      />
    </form>
  );
}
