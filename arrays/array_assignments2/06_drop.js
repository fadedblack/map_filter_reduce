// Remove first n elements from the array
// drop([1, 2, 3], 1) => [2, 3]
// drop([1, 2, 3], 4) => []
// Do not modify the original array
function drop(array, n) {
  const trimmedArray = [];

  if (array.length <= n) {
    return trimmedArray;
  }

  for (let index = array.length - n - 1; index < array.length; index += 1) {
    trimmedArray.push(array[index]);
  }

  return trimmedArray;
}

// For Testing
function getMark(isOutputValid) {
  return isOutputValid ? "✅" : "❌";
}

function message(array, n, expected, actual) {
  const contextSegment = " Array1: [" + array;
  const additionalSegment = "] | No of Elements: [" + n;
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

function testDrop(array, n, expected) {
  const actual = drop(array, n);
  const isOutputValid = areEqual(expected, actual);
  const textToShow = message(array, n, expected, actual);

  console.log(getMark(isOutputValid) + textToShow);
}

function testAll() {
  console.log("\nTesting Drop Function: \n");

  testDrop([1, 2, 3], 1, [2, 3]);
  testDrop([1, 2, 3], 4, []);

  console.log("\n");
}

testAll();