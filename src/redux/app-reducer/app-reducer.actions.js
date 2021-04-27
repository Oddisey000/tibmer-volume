import {
  GET_VOLUME_DATA,
  CHANGE_APP_LANGUAGE,
  LEFT_DRAWER_CLOSE,
  ADD_OR_EDIT_MODE
} from "./app-reducer.types";

import { createVolumeData } from "./app-reducer.utils";

export const getVolumeData = (dataArray, dataArray2) => ({
  type: GET_VOLUME_DATA,
  payload: createVolumeData(dataArray, dataArray2)
});

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
