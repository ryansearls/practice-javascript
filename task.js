// function firstTask() {
//   console.log("First task done!");
// }

// function secondTask() {
//   console.log("Second task done!");
// }

setTimeout(function () {
  console.log("First task done!");
  setTimeout(function () {
    console.log("Second task done!");
    setTimeout(function () {
      console.log("Third task done!");
    }, 2000);
  }, 2000);
}, 2000);