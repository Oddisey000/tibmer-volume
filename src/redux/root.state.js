import { languages, volumeData } from "../components/shared/data";

const INITIAL_STATE = {
  appLanguage: "ukrainian",
  languages: {
    english: languages.english,
    ukrainian: languages.ukrainian
  },
  workingMode: {
    timberVolume: {
      isSelected: true,
      timberVolumeType: ""
    },
    boardVolume: {
      isSelected: false,
      boardVolumeType: ""
    }
  },
  editMode: false,
  IndexOfElementToEdit: Number,
  setTableSelectedElements: [],
  appDrawer: false,
  appHasData: false,
  calculatedData: {
    calculatedResults: [],
    calculatedSummary: {},
  },
  // Big global object of data
  volumeData: {
    timberVolume: {
      volumeDataStandard: volumeData.volumeDataStandard,
      VolumeDataISO: volumeData.VolumeDataISO
    },
    boardVolume: {}
  }
};

export default INITIAL_STATE;
