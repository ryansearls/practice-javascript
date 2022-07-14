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

// var strings = ["hello", "goodbye"];
// var newStrings = [];
// strings.forEach(function (string) {
//   newStrings.push(string.toUpperCase());
// });
// console.log(newStrings);

//-----------------------------------------------------------------------------------------

// 3. Start with an array of hashes and create a new array of string values from each hash's :name key.
//    For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

// var people = [
//   { name: "Alice", age: 27 },
//   { name: "Blane", age: 16 },
// ];
// var newPeople = [];
// people.forEach (function (person) {
//   newPeople.push(person.name);
// });
// console.log(newPeople);

//--------------------------------------------------------------------------------------------

// 4. Start with an array of numbers and create a new array with each number plus 7.
//    For example, [1, 2, 3] becomes [8, 9, 10].

var numbers = [1, 2, 3];
var newNumbers = [];
numbers.forEach(function (number) {
  newNumbers.push(number + 7);
});
console.log(newNumbers);
