// Create or update existing array of user's data
export const createTimberVolumeDataObj = (
  userDataObj,
  calculatedResults,
  volumeDataTable
) => {
  // Find if length inserted by user of timber is available in data object
  const volumeLength = volumeDataTable[userDataObj.length]
    ? // If exactly the same number in database just return value to variable
      volumeDataTable[userDataObj.length]
    : // If exact data not available then fix value to 1 digit, that value 100% should be in data object
      volumeDataTable[Math.round(userDataObj.length * 10) / 10];

  // Get timber volume data from the object
  const timberVolume = volumeLength[Math.round(userDataObj.diameter)]
    ? volumeLength[Math.round(userDataObj.diameter)]
    : volumeLength[Math.round(userDataObj.diameter) - 1];

  // Check how much elements inside calculated results array
  const culculatedResultData = calculatedResults ? calculatedResults.length : 0;
  let calculatedResultsArr = calculatedResults ? calculatedResults : [];
  let calculatedData = {
    calculatedResults: [],
    calculatedSummary: {}
  };

  // Check if calculated results object already have data
  if (culculatedResultData > 0) {
    // If it has data then id number should next one after length parameter
    createfixedUserDataObj(culculatedResultData + 1);
  } else {
    // If there is no data then id should start from 0
    createfixedUserDataObj(culculatedResultData);
  }

  function createfixedUserDataObj(idValue) {
    const fixedUserDataObj = {
      id: idValue,
      diametr: userDataObj.diameter,
      length: userDataObj.length,
      quantity: userDataObj.quantity,
      volume: parseFloat(timberVolume),
      price:
        Math.round(
          parseFloat(userDataObj.price) * parseFloat(timberVolume) * 100
        ) / 100
    };
    createData(fixedUserDataObj);
  }
  // A function wich gonna create object item
  function createData(fixedUserDataObj) {
    calculatedResultsArr.push(fixedUserDataObj);
    return { calculatedResultsArr };
  }
  return calculatedData = {
    calculatedResults: calculatedResultsArr,
      calculatedSummary: {
        volume: calculatedResultsArr.length === 1
          ? calculatedResultsArr[0].volume
          : calculatedResultsArr.map((item) => (item.volume)).reduce((a, b) => a + b),
        price: calculatedResultsArr.length === 1
          ? calculatedResultsArr[0].price
          : calculatedResultsArr.map((item) => (item.price)).reduce((a, b) => a + b)
      }
  };
};
