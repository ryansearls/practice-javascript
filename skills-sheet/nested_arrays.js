//  1. Use a nested loop to convert an array of number pairs into a single flattened array.
//     For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

// var numberPairs = [
//   [1, 3],
//   [8, 9],
//   [2, 16],
// ];
// var newArray = [];
// var index1 = 0;
// while (index1 < numberPairs.length) {
//   var numberPair = numberPairs[index1];
//   var index2 = 0;
//   while (index2 < numberPair.length) {
//     var number = numberPair[index2];
//     newArray.push(number);
//     index2 += 1;
//   }
//   index1 += 1;
// }
// console.log(newArray);

//-----------------------------------------------------------------------

//  2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
//     For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

var letters1 = ["a", "b", "c"];
var letters2 = ["d", "e", "f", "g"];
var newArray = [];
var index1 = 0;
while (index1 < letters1.length) {
  var index2 = 0;
  while (index2 < letters2.length) {
    newArray.push(letters1[index1] + letters2[index2]);
    index2 += 1;
  }
  index1 += 1;
}
console.log(newArray);

//--------------------------------------------------------------------------