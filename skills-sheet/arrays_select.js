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

// var strings = ["winner", "winner", "chicken", "dinner"];
// var wStrings = [];
// strings.forEach(function (string) {
//   if (string[0] === 'w') {
//     wStrings.push(string);
//   }
// });
// console.log(wStrings);

//-------------------------------------------------------------------------------------------

//  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

// var items = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// var exspensiveItems = [];
// items.forEach(function (item) {
//   if (item.price > 5) {
//     exspensiveItems.push(item);
//   }
// });
// console.log(exspensiveItems);

//-----------------------------------------------------------------------------------------------

//  4. Start with an array of numbers and create a new array with only the even numbers.
//     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

// var numbers = [2, 4, 5, 1, 8, 9, 7];
// var evenNumbers = [];
// numbers.forEach(function (number) {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// });
// console.log(evenNumbers);

//----------------------------------------------------------------------------------------------

//  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
//     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

// var words = ["a", "man", "a", "plan", "a", "canal", "panama"];
// var shortWords = [];
// words.forEach(function (word) {
//   if (word.length < 4) {
//     shortWords.push(word);
//   }
// });
// console.log(shortWords);

//------------------------------------------------------------------------------------------------

//  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

// var things = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// var shortNames = [];
// things.forEach(function (thing) {
//   if (thing.name.length < 6) {
//     shortNames.push(thing);
//   }
// });
// console.log(shortNames);

//-----------------------------------------------------------------------------------------------

//  7. Start with an array of numbers and create a new array with only the numbers greater than or equal to 23.
//     For example, [8, 23, 0, 44, 1980, 3] becomes [23, 44, 1980].

// var numbers = [8, 23, 0, 44, 1980, 3];
// var newNumbers = [];
// numbers.forEach(function (number) {
//   if (number >= 23) {
//     newNumbers.push(number);
//   }
// });
// console.log(newNumbers);

//----------------------------------------------------------------------------------------------

//  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
//     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

// var words = ["big", "little", "good", "bad"];
// var noBs = [];
// words.forEach(function (word) {
//   if (word[0] !== 'b') {
//     noBs.push(word);
//   }
// });
// console.log(noBs);

//-----------------------------------------------------------------------------------------------

//  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].
// var items = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// var lessThan10 = [];
// items.forEach(function (item) {
//   if (item.price < 10) {
//     lessThan10.push(item);
//   }
// });
// console.log(lessThan10);

//------------------------------------------------------------------------------------------------

// 10. Start with an array of numbers and create a new array with only the odd numbers.
//     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

// var numbers = [2, 4, 5, 1, 8, 9, 7];
// var newNumbers = [];
// numbers.forEach(function (number) {
//   if (number % 2 === 1) {
//     newNumbers.push(number);
//   }
// });
// console.log(newNumbers);

//--------------------------------------------------------------------------------------------------