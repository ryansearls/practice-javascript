// 1. Write a while loop to print the numbers 1 through 10.

// var num = 1;
// while (num < 11) {
//   console.log(num);
//   num += 1;
// }

//-----------------------------------------------------------------------

// 2. Write a while loop that prints the word "hello" 5 times.

// var count = 0;
// while (count < 5) {
//   console.log("hello");
//   count += 1;
// }

//-----------------------------------------------------------------------

// 3. Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

while (true) {
  var input = window.prompt("Enter a word: ");
  if (input === "stop") {
    break;
  }
}

//-------------------------------------------------------------------------