import React from "react";

import RoundTimberComponent from "./round-timber/round.timber.component";
import LanguageComponent from "./app-language/app.language.component";
import Divider from "@material-ui/core/Divider";

const CalculationTypes = () => {
  return (
    <div id="app-footer">
      <RoundTimberComponent />
      <Divider />
      <LanguageComponent />
      <Divider />
    </div>
  );
};

export default CalculationTypes;
