// Imports from global libraries
import { combineReducers } from "redux";

// Imports custom variables
import settingsReducer from "./settings/settings.reducer";

const rootReducer = combineReducers({
  settings: settingsReducer
});

// Let redux-persist handle local storage and global reducer of the application
export default rootReducer;
