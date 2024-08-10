/**
 * setTimeout is a function that takes a callback function and a time in milliseconds as arguments.
 * It waits for the specified time and then executes the callback function.
 */

// print Hello! to the console immediately
console.log("Hello!");

// setTimeout(callback, time in ms);
// setTimeout(() => {
//     console.log("I will run after 1s");
// }, 1000);

// setTimeout(function timeout() {
//   console.log("I will run after 1s");
// }, 1000);

// function to run after 1s
function timeout() {
  console.log("I will run after 1s");
}

// call setTimeout function with run function and 1000ms as arguments
// setTimeout(callback, time in ms);
setTimeout(timeout, 1000);

console.log("Welcome to Loupe!");
