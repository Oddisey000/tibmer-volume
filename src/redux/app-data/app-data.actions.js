import { GET_VOLUME_DATA_ARRAY } from "./app-data.types";

import { createVolumeData } from "./app-data.utils";

export const getVolumeData = (dataArray, dataArray2) => ({
  type: GET_VOLUME_DATA_ARRAY,
  payload: createVolumeData(dataArray, dataArray2)
});
