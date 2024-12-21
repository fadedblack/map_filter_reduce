// Return all the elements of array1 which are not present in array2.
// difference([1, 2, 3], [2, 3, 4]) => [1]

function isElementPresent(element, array) {
  for (let index = 0; index < array.length; index += 1) {
    if (element === array[index]) {
      return true;
    }
  }

  return false;
}

function difference(array1, array2) {
  const uniqueElements = [];

  for (let index = 0; index < array2.length; index += 1) {
    if (!isElementPresent(array1[index], array2)) {
      uniqueElements.push(array1[index]);
    }
  }

  return uniqueElements;
}

// For Testing
function getMark(isOutputValid) {
  return isOutputValid ? "✅" : "❌";
}

function message(array1, array2, expected, actual) {
  const contextSegment = " Array1: [" + array1;
  const additionalSegment = "] Array2: [" + array2;
  const expectedSegment = "] | Expected Output: " + expected;
  const actualSegment = " | Actual Output: " + actual;

  return contextSegment + additionalSegment + expectedSegment + actualSegment;
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

function testDifference(array1, array2, expected) {
  const actual = difference(array1, array2);
  const isOutputValid = areEqual(expected, actual);
  const textToShow = message(array1, array2, expected, actual);

  console.log(getMark(isOutputValid) + textToShow);
}

function testAll() {
  console.log("\nTesting Difference Function: \n");

  testDifference([1, 2, 3], [2, 3, 4], [1]);
  testDifference([1, 2, 3], [1, 2, 3], []);
  testDifference([1, 2, 3], [4, 5, 6], [1, 2, 3]);
  testDifference([], [], []);

  console.log("\n");
}

testAll();