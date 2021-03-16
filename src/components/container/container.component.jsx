import React from "react";
import { connect } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import AppGridComponent from "./grid/grid.component";

// Import data and redux functions
import { volumeDataStandard, VolumeDataISO } from "../shared/data";
import { getVolumeData } from "../../redux/app-data/app-data.actions";

const AppContainer = ({ settings }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <AppGridComponent {...settings} />
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    settings: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVolumeData: (item, item2) => dispatch(getVolumeData(item, item2))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
