//  1. Start with an array of numbers and create a new array with only the numbers less than 20.
//     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

// var numbers = [2, 32, 80, 18, 12, 3];
// var smallNumbers = [];
// numbers.forEach(function (number) {
//   if (number < 20) {
//     smallNumbers.push(number);
//   }
// });
// console.log(smallNumbers);

//-----------------------------------------------------------------------------------------

//  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
//     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

var strings = ["winner", "winner", "chicken", "dinner"];
var wStrings = [];
strings.forEach(function (string) {
  if (string[0] === 'w') {
    wStrings.push(string);
  }
});
console.log(wStrings);