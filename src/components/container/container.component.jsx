import React from "react";
import { connect } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import AppGridComponent from "./grid/grid.component";

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
    settings: state.settings
  };
};

export default connect(mapStateToProps)(AppContainer);
