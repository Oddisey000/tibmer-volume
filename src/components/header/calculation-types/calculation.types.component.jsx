import React from "react";
import { connect } from 'react-redux';

import RoundTimberComponent from "./round-timber/round.timber.component";
import LanguageComponent from "./app-language/app.language.component";
import Divider from "@material-ui/core/Divider";

const CalculationTypes = ({appData}) => {
  return (
    <div id="app-footer">
      <RoundTimberComponent { ...appData } />
      <Divider />
      <LanguageComponent />
      <Divider />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appData: state
  };
};

export default connect(mapStateToProps)(CalculationTypes);
