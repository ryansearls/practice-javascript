//  1. Start with an array of numbers and create a new array with only the numbers less than 20.
//     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

var numbers = [2, 32, 80, 18, 12, 3];
var smallNumbers = [];
numbers.forEach(function (number) {
  if (number < 20) {
    smallNumbers.push(number);
  }
});
console.log(smallNumbers);