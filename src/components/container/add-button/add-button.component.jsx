import React from "react";
import { connect } from "react-redux";
import Badge from "@material-ui/core/Badge";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import {
  createTimberVolumeData,
  displayCalculation,
  makeCalcSummary
} from "../../../redux/app-reducer/app-reducer.actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -8,
    top: 30,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);

let dataObj = {}; // Need for sending data to state

const AddButtonComponent = ({
  appData,
  createTimberVolumeData,
  displayCalculation
}) => {
  const classes = useStyles();

  // Fill in data object with data for specific property
  const createVolumeDataObj = () => {
    let timberDiametr = document.getElementById("diameter").value;
    const timberLength = document.getElementById("length").value;
    const timberQuantity = document.getElementById("quantity").value;
    const timberPrice = document.getElementById("price").value;

    if (timberDiametr && timberLength && timberQuantity && timberPrice) {
      document.getElementById("diameter").value = "";
      dataObj["diameter"] = Math.ceil(timberDiametr);
      dataObj["length"] = parseFloat(timberLength);
      dataObj["quantity"] = Math.ceil(timberQuantity);
      dataObj["price"] = parseFloat(timberPrice);

      //document.getElementById("diameter").focus();

      createTimberVolumeData(
        dataObj,
        appData.appReducer.calculatedData.calculatedResults,
        appData.appReducer.volumeData.timberVolume.volumeDataStandard
      );

      displayCalculation(true);
    }
  };

  // Conditionaly apply budge icon
  const insertedData = appData.appReducer.calculatedData.calculatedResults
    .length
    ? appData.appReducer.calculatedData.calculatedResults
        .map((item) => item.quantity)
        .reduce((a, b) => a + b)
    : null; // You need to use data from state

  const displayBudge = insertedData ? (
    <StyledBadge badgeContent={insertedData} max={999} color="secondary">
      <AddIcon />
    </StyledBadge>
  ) : (
    <StyledBadge max={999} color="secondary">
      <AddIcon />
    </StyledBadge>
  );

  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="add" onClick={createVolumeDataObj}>
        {displayBudge}
      </Fab>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appData: { ...state }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTimberVolumeData: (item, item2, item3) =>
      dispatch(createTimberVolumeData(item, item2, item3)),
    displayCalculation: (item) => dispatch(displayCalculation(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddButtonComponent);
