// Imports from global libraries
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// Imports custom variables
// Local storage under the hood of redux-persist librarie
import storage from "redux-persist/lib/storage";
import appReducer from "./app-reducer/app.reducer";

// Variables
/**
 * Key for accessing default local storage object
 * The object itself
 * whitelist is the data which need to be in the persistant array
 */
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["appReducer"]
};

const rootReducer = combineReducers({
  appReducer: appReducer
});

// Let redux-persist handle local storage and global reducer of the application
export default persistReducer(persistConfig, rootReducer);
