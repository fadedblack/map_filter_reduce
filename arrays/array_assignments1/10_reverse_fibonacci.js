// Write a function that gives first n elements of fibonacci in reverse order
// fibonacci(5) => [3, 2, 1, 1, 0]
// do not modify input parameters
function fibonacci(noOfTerms) {
  let previousTerm = -1;
  let nextTerm = 1;

  const fibonacciSeries = [];

  for (let index = 0; index < noOfTerms; index += 1) {
    const nextToNextTerm = previousTerm + nextTerm;
    previousTerm = nextTerm;
    nextTerm = nextToNextTerm;
    fibonacciSeries[index] = nextToNextTerm;
  }

  return fibonacciSeries;
}

function reverse(array) {
  const reversedArray = [];

  for (let index = array.length; index > 0; index -= 1) {
    reversedArray[array.length - index] = array[index - 1];
  }

  return reversedArray;
}

function reverseFibonacci(noOfTerms) {
  return reverse(fibonacci(noOfTerms));
}

//For Testing;
function getMark(isOutputValid) {
  return isOutputValid ? "✅" : "❌";
}

function message(noOfTerms, expected, actual) {
  const contextSegment = " No Of Terms: " + noOfTerms;
  const expectedSegment = " | Expected Output: [" + expected;
  const actualSegment = "] | Actual Output: [" + actual + ']';

  return contextSegment + expectedSegment + actualSegment;
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

function testReverseFibonacci(noOfTerms, expected) {
  const actual = reverseFibonacci(noOfTerms);
  const isOutputValid = areEqual(expected, actual);
  const textToShow = message(noOfTerms, expected, actual);

  console.log(getMark(isOutputValid) + textToShow);
}

function testAll() {
  console.log("\nTesting Fibonacci Function: \n");

  testReverseFibonacci(1, [0]);
  testReverseFibonacci(2, [1, 0]);
  testReverseFibonacci(3, [1, 1, 0]);
  testReverseFibonacci(4, [2, 1, 1, 0]);

  console.log("\n");
}

testAll();