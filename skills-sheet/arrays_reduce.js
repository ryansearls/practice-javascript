//  1. Start with an array of numbers and compute the sum of all the numbers.
//     For example, [5, 10, 8, 3] becomes 26.

// var numbers = [5, 10, 8, 3];
// var total = 0;
// numbers.forEach(function (number) {
//   total += number;
// });
// console.log(total);

//------------------------------------------------------------------------------

//  2. Start with an array of strings and combine them all into a single string.
//     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

// var sports = ["volleyball", "basketball", "badminton"];
// var combined = '';
// sports.forEach(function (sport) {
//   combined += sport;
// });
// console.log(combined);

//----------------------------------------------------------------------------------

//  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

// var items = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// var total = 0;
// items.forEach(function (item) {
//   total += item.price;
// });
// console.log(total);

//---------------------------------------------------------------------------------------

//  4. Start with an array of numbers and compute the the minumum number.
//     For example, [5, 10, 8, 3] becomes 3.

// var numbers = [5, 10, 8, 3];
// var min = numbers[0];
// numbers.forEach(function (number) {
//   if (number < min) {
//     min = number;
//   }
// });
// console.log(min);

//-------------------------------------------------------------------------------------------

//  5. Start with an array of strings and compute the total length of all the strings.
//     For example, ["volleyball", "basketball", "badminton"] becomes 29.

// var words = ["volleyball", "basketball", "badminton"];
// var total = 0;
// words.forEach(function (word) {
//   total += word.length;
// })
// console.log(total);

//----------------------------------------------------------------------------------------------

//  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

// var items = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// var cheapItem = items[0];
// items.forEach(function (item) {
//   if (item.price < cheapItem.price) {
//     cheapItem = item;
//   }
// });
// console.log(cheapItem);

//-------------------------------------------------------------------------------------------------

//  7. Start with an array of numbers and compute product of all the numbers.
//     For example, [5, 10, 8, 3] becomes 1200.

// var numbers = [5, 10, 8, 3];
// var product = 1;
// numbers.forEach(function (number) {
//   product *= number;
// });
// console.log(product);

//-------------------------------------------------------------------------------------------------

//  8. Start with an array of strings and combine them all into a single string, separated by dashes.
//     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

// var strings = ["volleyball", "basketball", "badminton"];
// var newString = '';
// strings.forEach(function (string) {
//   newString += string + '-';
// });
// console.log(newString);

//-------------------------------------------------------------------------------------------------

//  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
//     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

// var products = [
//   { name: "chair", price: 100 },
//   { name: "pencil", price: 1 },
//   { name: "book", price: 4 },
// ];
// var shortestName = products[0];
// products.forEach(function (product) {
//   if (product.name.length < shortestName.name.length) {
//     shortestName = product;
//   }
// });
// console.log(shortestName);

//-----------------------------------------------------------------------------------------------------

// 10. Start with an array of numbers and compute the maximum number.
//     For example, [5, 10, 8, 3] becomes 10.

// var numbers = [5, 10, 8, 3];
// var maxNumber = numbers[0];
// numbers.forEach(function (number) {
//   if (number > maxNumber) {
//     maxNumber = number;
//   }
// });
// console.log(maxNumber);

//------------------------------------------------------------------------------------------------------