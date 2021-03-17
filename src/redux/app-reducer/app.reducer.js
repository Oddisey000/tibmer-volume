import INITIAL_STATE from "../root.state";
import { GET_VOLUME_DATA } from "./app-reducer.types";

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_VOLUME_DATA:
      return {
        ...state,
        volumeData: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;
