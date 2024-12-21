// Given an array of numbers and a element, return the last index in the array
// where element is present else -1
// findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea") => 4
// do not modify input parameters
function findLastIndex(array, element) {
  for (let index = array.length; index >= 0; index -= 1) {
    if (array[index] === element) {
      return index;
    }
  }

  return -1;
}

//For Testing;
function getMark(isOutputValid) {
  return isOutputValid ? "✅" : "❌";
}

function message(array, element, expected, actual) {
  const contextSegment = " Array: [" + array;
  const addedContext = "] | Element: " + element;
  const expectedSegment = " | Expected Output: [" + expected;
  const actualSegment = "] | Actual Output: [" + actual + ']';

  return contextSegment + addedContext + expectedSegment + actualSegment;
}

function testFindLastIndex(array, element, expected) {
  const actual = findLastIndex(array, element);
  const isOutputValid = expected === actual;
  const textToShow = message(array, element, expected, actual);

  console.log(getMark(isOutputValid) + textToShow);
}

function testAll() {
  console.log("\nTesting Find Last Index Function: \n");

  testFindLastIndex([1, 2], 2, 1);
  testFindLastIndex(["apple", "cake", "tea", "coffee", "tea"], "tea", 4);
  testFindLastIndex(["apple"], "tea", -1);
  testFindLastIndex(["apple", 1], 1, 1);
  testFindLastIndex(["apple"], 'apple', 0);
  console.log("\n");
}

testAll();