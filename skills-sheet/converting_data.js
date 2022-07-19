//  1. Convert an array of arrays into a hash.
//     For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

// var pairs = [
//   [1, 3],
//   [8, 9],
//   [2, 16],
// ];
// var hash = {};
// var index = 0;
// while (index < pairs.length) {
//   var key = pairs[index][0];
//   var value = pairs[index][1];
//   hash[key] = value;
//   index += 1;
// }
// console.log(hash);

//------------------------------------------------------------------------------

//  2. Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
//     For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

// var items = [
//   { id: 1, color: "blue", price: 32 },
//   { id: 2, color: "red", price: 12 },
// ];
// var hash = {};
// var index = 0;
// while (index < items.length) {
//   hash[items[index].id] = items[index];
//   index += 1;
// }
// console.log(hash);

//------------------------------------------------------------------------------------

//  3. Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
//     For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

var word = "bookkeeper";
var letterFrequencies = {};
var index = 0;
while (index < word.length) {
  var letter = word[index];
  if (letterFrequencies[letter] === undefined) {
    letterFrequencies[letter] = 0;
  }
  letterFrequencies[letter] += 1;
  index += 1;
}
console.log(letterFrequencies);

//-----------------------------------------------------------------------------------------
