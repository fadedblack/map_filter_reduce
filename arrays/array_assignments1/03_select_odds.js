// Given an array of numbers return a new array containing only odd elements of the
// original array.
// selectOdds([3, 2, 4, 5, 7]) => [3, 5, 7]
// selectOdds([2, 4, 6]) => []
// Do not modify the input array.

const isOdd = function (number) {
  return (number & 1) === 1;
}

const selectOdds = function (array) {
  return array.filter(isOdd);
}