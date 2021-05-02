import INITIAL_STATE from "../root.state";
import {
  CHANGE_APP_LANGUAGE,
  LEFT_DRAWER_CLOSE,
  ADD_OR_EDIT_MODE,
  ADD_CALCULATED_DATA,
  ENABLE_DISPLAY_RESULTS,
  MAKE_CALC_SUMMARY
} from "./app-reducer.types";

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_APP_LANGUAGE:
      return {
        ...state,
        appLanguage: action.payload
      };
    case LEFT_DRAWER_CLOSE:
      return {
        ...state,
        appDrawer: action.payload
      };
    case ADD_OR_EDIT_MODE:
      return {
        ...state,
        editMode: action.payload
      };
    case ADD_CALCULATED_DATA:
      return {
        ...state,
        calculatedData: action.payload
      };
    case ENABLE_DISPLAY_RESULTS:
      return {
        ...state,
        appHasData: action.payload
      };
    case MAKE_CALC_SUMMARY:
      return {
        ...state,
        calculatedSummary: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;
