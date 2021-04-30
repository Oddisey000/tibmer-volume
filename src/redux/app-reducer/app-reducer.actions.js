import {
  CHANGE_APP_LANGUAGE,
  LEFT_DRAWER_CLOSE,
  ADD_OR_EDIT_MODE,
  ADD_CALCULATED_DATA
} from "./app-reducer.types";
import { createTimberVolumeDataObj } from "./app-reducer.utils";

export const changeAppLanguage = (selectedLanguage) => ({
  type: CHANGE_APP_LANGUAGE,
  payload: selectedLanguage
});

export const leftDrawerClose = (value) => ({
  type: LEFT_DRAWER_CLOSE,
  payload: value
});

export const addOrEdit = (value) => ({
  type: ADD_OR_EDIT_MODE,
  payload: value
});

export const createTimberVolumeData = (
  userDataObj,
  calculatedResults,
  volumeDataTable
) => ({
  type: ADD_CALCULATED_DATA,
  payload: createTimberVolumeDataObj(
    userDataObj,
    calculatedResults,
    volumeDataTable
  )
});
