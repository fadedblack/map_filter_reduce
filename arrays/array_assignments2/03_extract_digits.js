// Give an number extract its digit into array
// Number can positive, negative, floating point.
// extractDigits(123) => [1, 2, 3]
// extractDigits(-123) => [1, 2, 3]
// extractDigits(12.3) => [1, 2, 3]
function extractDigits(number) {
  const digits = [];
  let dividend = Math.abs(number);

  while (dividend > 1) {
    const digit = dividend % 10; //needs to work for floating point
    digits.unshift(digit);
    dividend = (dividend - digit) / 10;
  }

  digits.unshift(dividend);

  return digits;
}

// For Testing
function getMark(isOutputValid) {
  return isOutputValid ? "✅" : "❌";
}

function message(number, expected, actual) {
  const contextSegment = " Number: " + number;
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

function testExtractDigits(number, expected) {
  const actual = extractDigits(number);
  const isOutputValid = areEqual(expected, actual);
  const textToShow = message(number, expected, actual);

  console.log(getMark(isOutputValid) + textToShow);
}

function testAll() {
  console.log("\nTesting Extract Digits Function: \n");

  testExtractDigits(123, [1, 2, 3]);
  testExtractDigits(-123, [1, 2, 3]);
  testExtractDigits(12.3, [1, 2, 3]);
  console.log("\n");
}

testAll();