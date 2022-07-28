//  1. Use a nested loop to convert an array of number pairs into a single flattened array.
//     For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].

var numberPairs = [
  [1, 3],
  [8, 9],
  [2, 16],
];
var newArray = [];
var index1 = 0;
while (index1 < numberPairs.length) {
  var numberPair = numberPairs[index1];
  var index2 = 0;
  while (index2 < numberPair.length) {
    var number = numberPair[index2];
    newArray.push(number);
    index2 += 1;
  }
  index1 += 1;
}
console.log(newArray);

//-----------------------------------------------------------------------