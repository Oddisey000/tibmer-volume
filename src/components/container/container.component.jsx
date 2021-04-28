import React from "react";
import { connect } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import AppGridComponent from "./grid/grid.component";

import { leftDrawerClose } from "../../redux/app-reducer/app-reducer.actions";

const AppContainer = ({ leftDrawerClose }) => {
  const handleClick = () => {
    //console.log("onClickOutside() method called");
    leftDrawerClose(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" onClick={handleClick}>
        <AppGridComponent />
      </Container>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    leftDrawerClose: (item) => dispatch(leftDrawerClose(item))
  };
};

export default connect(null, mapDispatchToProps)(AppContainer);
