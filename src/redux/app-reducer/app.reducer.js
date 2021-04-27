import INITIAL_STATE from "../root.state";
import {
  GET_VOLUME_DATA,
  CHANGE_APP_LANGUAGE,
  LEFT_DRAWER_CLOSE,
  ADD_OR_EDIT_MODE
} from "./app-reducer.types";

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_VOLUME_DATA:
      return {
        ...state,
        volumeData: action.payload
      };
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
    default:
      return state;
  }
};

export default appReducer;
