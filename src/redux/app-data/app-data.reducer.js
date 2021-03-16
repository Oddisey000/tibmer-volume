import INITIAL_STATE from "../root.state";
import { GET_VOLUME_DATA_ARRAY } from "./app-data.actions";

const appDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_VOLUME_DATA_ARRAY:
      return {
        ...state,
        volumeData: action.payload
      };
    default:
      return state;
  }
};

export default appDataReducer;
