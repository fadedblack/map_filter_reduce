// Write a function that gives first n elements of fibonacci in an array
// fibonacci(5) => [0, 1, 1, 2, 3]
// do not modify input parameters

const repeatStar = function (times) {
  return '*'.repeat(times);
};

const repeatSpace = function (element) {
  return element.padStart(4);
};

const starEdges = function (element) {
  return '*' + ' '.repeat(element - 2) + '*';
};

const rectangle = [4, 4, 4, 4].map(repeatStar);
const hollowRectangle = [repeatStar(4), [4, 4, 4].map(starEdges).join('\n'), repeatStar(4)];
const triangle = [1, 2, 3, 4].map(repeatStar);
const rightTriangle = triangle.map(repeatSpace);