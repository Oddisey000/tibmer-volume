import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import AppGridComponent from "./grid/grid.component";

const AppContainer = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <AppGridComponent />
      </Container>
    </React.Fragment>
  );
};

export default AppContainer;
