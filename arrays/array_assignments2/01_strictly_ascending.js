// Given an array of numbers true if numbers are in strictly ascending order
// otherwise false.
// isStrictlyAscending([1, 3, 4, 5, 16]) => true
// isStrictlyAscending([1, 3, 2, 4]) => false
// isStrictlyAscending([1, 3, 3, 4]) => false

function isStrictlyAscending(numbers) {
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] <= numbers[index - 1]) {
      return false;
    }
  }

  return true;
}

// For Testing
function getMark(isOutputValid) {
  return isOutputValid ? "✅" : "❌";
}

function message(array, expected, actual) {
  const contextSegment = " Array: [" + array;
  const expectedSegment = "] | Expected Output: " + expected;
  const actualSegment = " | Actual Output: " + actual;

  return contextSegment + expectedSegment + actualSegment;
}

function testIsStrictlyAscending(array, expected) {
  const actual = isStrictlyAscending(array);
  const isOutputValid = expected === actual;
  const textToShow = message(array, expected, actual);

  console.log(getMark(isOutputValid) + textToShow);
}

function testAll() {
  console.log("\nTesting Is Strictly Ascending Function: \n");

  testIsStrictlyAscending([1, 3, 4, 5, 16], true);
  testIsStrictlyAscending([1, 3, 2, 4], false);
  testIsStrictlyAscending([1, 3, 3, 4], false);
  testIsStrictlyAscending([3, 3], false);
  testIsStrictlyAscending([3], true);
  testIsStrictlyAscending([3, 2], false);

  console.log("\n");
}

testAll();