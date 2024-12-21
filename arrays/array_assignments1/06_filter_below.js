// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers which are below threshold.
// filterBelow([6, 2, 3, 1, 4, 7], 3) => [2, 1]
// filterBelow([1, 2, 3], 0) => []
// do not modify input parameters
function filterBelow(array, threshold) {
  const newArray = [];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < threshold) {
      newArray[newArray.length] = array[index];
    }
  }

  return newArray;
}

//For Testing
function getMark(isOutputValid) {
  return isOutputValid ? "✅" : "❌";
}

function message(array, threshold, expected, actual) {
  const contextSegment = " Array: [" + array;
  const addedContext = "] | Threshold: " + threshold;
  const expectedSegment = " | Expected Output: [" + expected;
  const actualSegment = "] | Actual Output: [" + actual + ']';

  return contextSegment + addedContext + expectedSegment + actualSegment;
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index += 1) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function testFilterBelow(array, threshold, expected) {
  const actual = filterBelow(array, threshold);
  const isOutputValid = areEqual(expected, actual);
  const textToShow = message(array, threshold, expected, actual);

  console.log(getMark(isOutputValid) + textToShow);
}

function testAll() {
  console.log("\nTesting Filter Below Function: \n");

  testFilterBelow([6, 2, 3, 1, 4, 7], 3, [2, 1]);
  testFilterBelow([1, 2, 3], 4, [1, 2, 3]);
  testFilterBelow([1, 2, 3], 0, []);
  testFilterBelow([], 4, []);

  console.log("\n");
}

testAll();