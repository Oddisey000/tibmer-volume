import React from "react";
import { connect } from "react-redux";
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

const BasicTextFields = ({ appData }) => {
  const selectedLanguage = appData.appReducer.appLanguage;

  const classes = useStyles();

  //console.log(appData);

  // Checks if user insert correct data into text field and clean when data is incorrect
  const checkIfNum = (e) => {
    if (e.target.placeholder) {
      e.target.value =
        // Check if there is a number and if it not bigger then maximum allowed
        e.target.value <= parseFloat(e.target.placeholder)
          ? // Insert this value into text field
            parseFloat(e.target.value)
          : // Clean text field if user insert incorrect data
            null;
    } else {
      // If there is no maximum allowed number to insert check if user insert number value
      e.target.value = isNaN ? parseFloat(e.target.value) : null;
    }
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
};

const mapStateToProps = (state) => {
  return {
    appData: { ...state }
  };
};

export default connect(mapStateToProps)(BasicTextFields);
