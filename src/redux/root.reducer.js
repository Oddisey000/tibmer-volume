// Imports from global libraries
import { combineReducers } from "redux";

// Imports custom variables
import settingsReducer from "./settings/settings.reducer";
import appDataReducer from "./app-data/app-data.reducer";

const rootReducer = combineReducers({
  settings: settingsReducer,
  appData: appDataReducer
});

// Let redux-persist handle local storage and global reducer of the application
export default rootReducer;
