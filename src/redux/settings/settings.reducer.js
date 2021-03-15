import INITIAL_STATE from "../root.state";
import { CHECK_DATA_EXISTANCE } from "./settings.actions";

const settingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECK_DATA_EXISTANCE:
      return {
        ...state,
        appHasData: state.settings.appHasData
      };
    default:
      return state;
  }
};

export default settingsReducer;
