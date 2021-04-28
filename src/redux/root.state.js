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
  clickAway: true,
  appDrawer: false,
  appHasData: false,
  calculatedResults: [],
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
