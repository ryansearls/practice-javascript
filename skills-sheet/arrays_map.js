// 1. Start with an array of numbers and create a new array with each number times 3.
//    For example, [1, 2, 3] becomes [3, 6, 9].

// var numbers = [1, 2, 3];
// var newNumbers = [];
// numbers.forEach(function (number) {
//   newNumbers.push(number * 3);
// });
// console.log(newNumbers);

//------------------------------------------------------------------------------------------

// 2. Start with an array of strings and create a new array with each string upcased.
//    For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

var strings = ["hello", "goodbye"];
var newStrings = [];
strings.forEach(function (string) {
  newStrings.push(string.toUpperCase());
});
console.log(newStrings);