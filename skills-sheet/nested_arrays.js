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

// var letters1 = ["a", "b", "c"];
// var letters2 = ["d", "e", "f", "g"];
// var newArray = [];
// var index1 = 0;
// while (index1 < letters1.length) {
//   var index2 = 0;
//   while (index2 < letters2.length) {
//     newArray.push(letters1[index1] + letters2[index2]);
//     index2 += 1;
//   }
//   index1 += 1;
// }
// console.log(newArray);

//--------------------------------------------------------------------------

//  3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
//     For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

// var letters = ["a", "b", "c", "d"];
// var newLetters = [];
// var index1 = 0;
// while (index1 < letters.length) {
//   var index2 = 0;
//   while (index2 < letters.length) {
//     if (index1 !== index2) {
//       newLetters.push(letters[index1] + letters[index2]);
//     }
//     index2 += 1;
//   }
//   index1 += 1;
// }
// console.log(newLetters);

//--------------------------------------------------------------------------

//  4. Use a nested loop to find the largest product of any two different numbers within a given array.
//     For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.

// var numbers = [5, -2, 1, -9, -7, 2, 6];
// var maxProducts = numbers[0] * numbers[1];
// var index1 = 0;
// while (index1 < numbers.length) {
//   var currentNumber = numbers[index1];
//   var index2 = 0;
//   while (index2 < numbers.length) {
//     if (index1 !== index2) {
//       var otherNumber = numbers[index2];
//       var product = currentNumber * otherNumber;
//       if (product > maxProducts) {
//         maxProducts = product;
//       }
//     }
//     index2 += 1;
//   }
//   index1 += 1;
// }
// console.log(maxProducts);

//----------------------------------------------------------------------------

//  5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
//     For example, [[1, 3], [8, 9], [2, 16]] becomes 39.

// var numberPairs = [
//   [1, 3],
//   [8, 9],
//   [2, 16],
// ];
// var total = 0;
// var index1 = 0;
// while (index1 < numberPairs.length) {
//   var numberPair = numberPairs[index1];
//   var index2 = 0;
//   while (index2 < numberPair.length) {
//     var number = numberPair[index2];
//     total += number;
//     index2 += 1;
//   }
//   index1 += 1;
// }
// console.log(total);

//------------------------------------------------------------------------------

//  6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
//     For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

// var numbers1 = [1, 2];
// var numbers2 = [6, 7, 8];
// var newNumbers = [];
// var index1 = 0;
// while (index1 < numbers1.length) {
//   var firstNumber = numbers1[index1];
//   var index2 = 0;
//   while (index2 < numbers2.length) {
//     var secondNumber = numbers2[index2];
//     newNumbers.push(firstNumber + secondNumber);
//     index2 += 1;
//   }
//   index1 += 1;
// }
// console.log(newNumbers);

//---------------------------------------------------------------------------------

//  7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
//     For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

// var numbers = [2, 8, 3];
// var everyCombo = [];
// var index1 = 0;
// while (index1 < numbers.length) {
//   var index2 = 0;
//   while (index2 < numbers.length) {
//     everyCombo.push(numbers[index1] * numbers[index2]);
//     index2 ++;
//   }
//   index1 ++;
// }
// console.log(everyCombo);

//---------------------------------------------------------------------------------

//  8. Use a nested loop to find the largest sum of any two different numbers within an array.
//     For example, [1, 8, 3, 10] becomes 18.

// var numbers = [1, 8, 3, 10];
// var max = numbers[0] + numbers[1];
// var index1 = 0;
// while (index1 < numbers.length) {
//   var index2 = 0;
//   while (index2 < numbers.length) {
//     if (index1 !== index2) {
//       var sum = numbers[index1] + numbers[index2];
//       if (sum > max) {
//         max = sum;
//       }
//     }
//     index2 ++;
//   }
//   index1 ++;
// }
// console.log(max);

//----------------------------------------------------------------------------

//  9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.

//For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].

// var numbers = [2, 5, 3, 1, 0, 7, 11];
// var result = false;
// var index1 = 0;
// while (index1 < numbers.length) {
//   var currentNumber = numbers[index1];
//   var index2 = 0;
//   while (index2 < numbers.length) {
//     if (index1 !== index2) {
//       var otherNumber = numbers[index2];
//       if (currentNumber + otherNumber == 10 && result === false) {
//         result = [currentNumber, otherNumber];
//       }
//     }
//     index2 += 1;
//   }
//   index1 += 1;
// }
// console.log(result);

//-------------------------------------------------------------------------------

// 10. Use a nested loop to convert an array of string arrays into a single string.
//     For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".

var nestedWords = [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]];
var combinedWord = "";
var index1 = 0;
while (index1 < nestedWords.length) {
  var index2 = 0;
  while (index2 < nestedWords[index1].length) {
    combinedWord = combinedWord + nestedWords[index1][index2];
    index2 = index2 + 1;
  }
  index1 = index1 + 1;
}
console.log(combinedWord);

//----------------------------------------------------------------------------------

