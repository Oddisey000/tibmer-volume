// Imports from global libraries
import { combineReducers } from "redux";

// Imports custom variables
import appReducer from "./app-reducer/app.reducer";

const rootReducer = combineReducers({
  appReducer: appReducer
});

// Let redux-persist handle local storage and global reducer of the application
export default rootReducer;
