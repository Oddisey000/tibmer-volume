import { GET_VOLUME_DATA } from "./app-reducer.types";

import { createVolumeData } from "./app-reducer.utils";

export const getVolumeData = (dataArray, dataArray2) => ({
  type: GET_VOLUME_DATA,
  payload: createVolumeData(dataArray, dataArray2)
});
