// concat the given arrays.
// concat([1, 2, 3], [4, 5, 6]) => [1, 2, 3, 4, 5, 6]
function concat(array1, array2) {
  const mergedArray = array1;

  for (let index = 0; index < array2.length; index += 1) {
    mergedArray.push(array2[index]);
  }

  return mergedArray;
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

function testConcat(array1, array2, expected) {
  const actual = concat(array1, array2);
  const isOutputValid = areEqual(expected, actual);
  const textToShow = message(array1, array2, expected, actual);

  console.log(getMark(isOutputValid) + textToShow);
}

function testAll() {
  console.log("\nTesting Concat Function: \n");

  testConcat([1, 2, 3], [4, 5, 6], [1, 2, 3, 4, 5, 6]);
  testConcat([], [], []);
  testConcat([1], [], [1]);
  testConcat([], [1], [1]);
  testConcat([1], [1], [1, 1]);

  console.log("\n");
}

testAll();