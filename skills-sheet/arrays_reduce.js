//  1. Start with an array of numbers and compute the sum of all the numbers.
//     For example, [5, 10, 8, 3] becomes 26.

var numbers = [5, 10, 8, 3];
var total = 0;
numbers.forEach(function (number) {
  total += number;
});
console.log(total);

//------------------------------------------------------------------------------