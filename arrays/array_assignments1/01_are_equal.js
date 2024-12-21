// Given array1 and array2 returns true if both array are equal else false.
// Examples:
// areEqual([1, 2, 3, 4], [1, 2, 3, 4]) => true
// areEqual([1, 2, 3], [1, 2, 3, 4]) => false
// areEqual([1, 2, 3], [1, 3, 2]) => false
// areEqual([], []) => true
// do not modify input parameters

const equal = function (element1, element2) {
  return element1 === element2;
};

const isEqual = function (element) {
  return [2, 3, 4].map(equal);
};

const equalities = [1, 2, 3, 4].map(isEqual);