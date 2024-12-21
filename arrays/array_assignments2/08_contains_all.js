// Return true if all elements are present in the array regardless of their order.
// Otherwise, return false.
// containsAll([1, 2, 3], [2, 1]) => true
// containsAll([1, 2, 3], [2, 1, 4]) => false

function isElementPresent(element, array) {
  for (let index = 0; index < array.length; index += 1) {
    if (element === array[index]) {
      return true;
    }
  }

  return false;
}

function containsAll(array, elements) {
  for (let index = 0; index < elements.length; index += 1) {
    if (!isElementPresent(elements[index], array)) {
      return false;
    }
  }

  return true;
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

function testContainsAll(array1, array2, expected) {
  const actual = containsAll(array1, array2);
  const isOutputValid = areEqual(expected, actual);
  const textToShow = message(array1, array2, expected, actual);

  console.log(getMark(isOutputValid) + textToShow);
}

function testAll() {
  console.log("\nTesting Contains All Function: \n");

  testContainsAll([1, 2, 3], [2, 1], true);
  testContainsAll([1, 2, 3], [2, 1, 4], false);

  console.log("\n");
}

testAll();