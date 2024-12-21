// Given an array containing words, return a new array containing length of
// the words.
// mapLengths(["apple", "cat", "Four"]) => [5, 3, 4]
// do not modify input parameters

const getLength = function (string) {
  return string.length;
};

const lengthOfWords = ["apple", "cat", "Four"].map(getLength);