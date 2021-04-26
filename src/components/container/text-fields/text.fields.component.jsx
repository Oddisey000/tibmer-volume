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

export default function BasicTextFields({ ...appData }) {
  const selectedLanguage = appData.appReducer.appLanguage;

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        placeholder="120 max"
        type="number"
        id="diametr"
        label={appData.appReducer.languages[selectedLanguage].main.diametr}
      />
      <TextField
        placeholder="9.5 max"
        type="number"
        id="length"
        label={appData.appReducer.languages[selectedLanguage].main.length}
      />
      <TextField
        type="number"
        id="quantity"
        label={appData.appReducer.languages[selectedLanguage].main.quantity}
      />
      <TextField
        type="number"
        id="price"
        label={appData.appReducer.languages[selectedLanguage].main.price}
        variant="outlined"
      />
    </form>
  );
}
