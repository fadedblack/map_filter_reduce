const reduce = function (array, reducer, init, index) {
  if (index >= array.length) {
    return init;
  }

  let result = reducer(init, array[index]);

  return result + reduce(array, reducer, init, index + 1);
};

const add = function (number1, number2) {
  return number1 + number2;
};

const concat = function (string1, string2) {
  return string1 + string2;
};

reduce([1, 2, 3, 4, 5, 6, 7, 8, 9], add, 0, 0);