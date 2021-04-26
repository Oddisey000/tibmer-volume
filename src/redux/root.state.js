import { languages } from "../components/shared/data";

const INITIAL_STATE = {
  appLanguage: "english",
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
  clickAway: false,
  appHasData: true,
  calculatedResults: [],
  // Big global object of data
  volumeData: {
    timberVolume: {},
    boardVolume: {}
  }
};

export default INITIAL_STATE;
