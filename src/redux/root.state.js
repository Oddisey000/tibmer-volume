const INITIAL_STATE = {
  // All the data related to user's settings
  settings: {
    language: "",
    languages: {
      english: {},
      ukrainian: {}
    },
    workingMode: {
      timberVolume: {
        timberVolumeType: ""
      },
      boardVolume: {
        boardVolumeType: ""
      }
    },
    // Used for conditionaly mount components
    appHasData: true,
    // Conditionaly select or unselect elements inside table and replace action buttons
    selectedItems: {
      editMode: false,
      clickAway: 1
    }
  },
  appData: {
    // User data stored in data array
    calculatedResults: [],
    // Big global object of data
    volumeData: {}
  }
};

export default INITIAL_STATE;
