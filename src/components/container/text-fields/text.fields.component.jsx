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

let dataObj = {};

export default function BasicTextFields({ ...appData }) {
  const selectedLanguage = appData.appReducer.appLanguage;

  const classes = useStyles();

  const createDataObj = (property, dataObjdata) => {
    if (dataObjdata) {
      dataObj[property] = parseFloat(dataObjdata);
    } else {
      delete dataObj[property];
    }
  };

  const checkIfNum = (e) => {
    if (e.target.placeholder) {
      e.target.value =
        e.target.value <= parseFloat(e.target.placeholder)
          ? parseFloat(e.target.value)
          : null;
      createDataObj(e.target.id, e.target.value);
    } else {
      e.target.value = isNaN ? parseFloat(e.target.value) : null;
      createDataObj(e.target.id, e.target.value);
    }
    //console.log(e.target.id);
    //console.log(Object.keys(dataObj).length);

    console.log(Object.keys(dataObj).length);
    console.log(dataObj);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        placeholder="120 max"
        type="number"
        pattern="[0-9]"
        id="diameter"
        label={appData.appReducer.languages[selectedLanguage].main.diametr}
        onBlur={checkIfNum}
      />
      <TextField
        placeholder="9.5 max"
        type="number"
        id="length"
        label={appData.appReducer.languages[selectedLanguage].main.length}
        onBlur={checkIfNum}
      />
      <TextField
        type="number"
        id="quantity"
        label={appData.appReducer.languages[selectedLanguage].main.quantity}
        onBlur={checkIfNum}
      />
      <TextField
        type="number"
        id="price"
        label={appData.appReducer.languages[selectedLanguage].main.price}
        variant="outlined"
        onBlur={checkIfNum}
      />
    </form>
  );
}
