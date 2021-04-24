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
      <TextField
        placeholder="120 max"
        type="number"
        id="diametr"
        label="Діаметр см"
      />
      <TextField
        placeholder="9.5 max"
        type="number"
        id="length"
        label="Довжина м"
      />
      <TextField type="number" id="quantity" label="Кількість" />
      <TextField
        type="number"
        id="price"
        label="Ціна"
        variant="outlined"
      />
    </form>
  );
}
