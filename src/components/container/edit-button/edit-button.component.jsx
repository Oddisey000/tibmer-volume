import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";

import { changeElementFromTable } from "../../../redux/app-reducer/app-reducer.actions";

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

let dataObj = {}; // Need for sending data to state

const EditButtonComponent = ({ appData, changeElementFromTable }) => {
  const classes = useStyles();

  const handleOnClick = () => {
    const timberDiametr = document.getElementById("diameter").value;
    const timberLength = document.getElementById("length").value;
    const timberQuantity = document.getElementById("quantity").value;
    const timberPrice = document.getElementById("price").value;

    if (timberDiametr && timberLength && timberQuantity && timberPrice) {
      dataObj["diameter"] = Math.ceil(timberDiametr);
      dataObj["length"] = parseFloat(timberLength);
      dataObj["quantity"] = Math.ceil(timberQuantity);
      dataObj["price"] = parseFloat(timberPrice);

      document.getElementById("diameter").value = null;
      //document.getElementById("diameter").focus();

      changeElementFromTable(
        dataObj,
        appData.appReducer.calculatedData.calculatedResults,
        appData.appReducer.volumeData.timberVolume.volumeDataStandard,
        appData.appReducer.IndexOfElementToEdit
      );

      document.getElementById("diameter").value = null;
      document.getElementById("length").value = null;
      document.getElementById("quantity").value = null;
    }
  };

  return (
    <div className={classes.root}>
      <Fab color="secondary" aria-label="edit" onClick={handleOnClick}>
        <EditIcon />
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
    changeElementFromTable: (item, item2, item3, item4) =>
      dispatch(changeElementFromTable(item, item2, item3, item4))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditButtonComponent);
