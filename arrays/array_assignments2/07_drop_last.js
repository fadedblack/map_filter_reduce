// Remove last n elements from the array
// dropLast([1, 2, 3], 1) => [1, 2]
// dropLast([1, 2, 3], 4) => []
// Do not modify the original array
function dropLast(array, n) {
  const trimmedArray = [];

  if (array.length <= n) {
    return trimmedArray;
  }

  for (let index = 0; index < array.length - n; index += 1) {
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

function testDropLast(array, n, expected) {
  const actual = dropLast(array, n);
  const isOutputValid = areEqual(expected, actual);
  const textToShow = message(array, n, expected, actual);

  console.log(getMark(isOutputValid) + textToShow);
}

function testAll() {
  console.log("\nTesting Drop Last Function: \n");

  testDropLast([1, 2, 3], 1, [1, 2]);
  testDropLast([1, 2, 3], 4, []);

  console.log("\n");
}

testAll();