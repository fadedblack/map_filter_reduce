// Given an array of numbers true if numbers are in strictly descending order
// otherwise false.
// isStrictlyDescending([5, 4, 2, 1]) => true
// isStrictlyDescending([5, 4, 6, 1]) => false
// isStrictlyDescending([5, 4, 4, 1]) => false

function isStrictlyDescending(numbers) {
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] >= numbers[index - 1]) {
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

function testIsStrictlyDescending(array, expected) {
  const actual = isStrictlyDescending(array);
  const isOutputValid = expected === actual;
  const textToShow = message(array, expected, actual);

  console.log(getMark(isOutputValid) + textToShow);
}

function testAll() {
  console.log("\nTesting Is Strictly Descending Function: \n");

  testIsStrictlyDescending([5, 4, 2, 1], true);
  testIsStrictlyDescending([5, 4, 6, 1], false);
  testIsStrictlyDescending([5, 4, 4, 1], false);

  console.log("\n");
}

testAll();