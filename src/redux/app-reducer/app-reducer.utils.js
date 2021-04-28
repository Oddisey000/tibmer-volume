// Create or update existing array of user's data
export const createTimberVolumeData = (userDataObj, calculatedResults) => {
  // Check next id item position
  const existingDataArrSize = calculatedResults.length
    ? calculatedResults.length + 1
    : calculatedResults.length;
  // A function wich gonna create object item
  function createData(id, diametr, length, quantity, volume, price) {
    return { id, diametr, length, quantity, volume, price };
  }

  // Testing
  /*const found = array1.findIndex(function (element) {
    if (element.length == 9 && element.diametr == 22) {
      return element;
    }
  });*/

  calculatedResults.push(
    createData(
      existingDataArrSize,
      userDataObj.diametr,
      userDataObj.length,
      userDataObj.quantity,
      userDataObj.volume,
      userDataObj.price
    )
  );
  // Testing
  return calculatedResults;
};
