/**
 * Call Stack
 *  - A call stack is a mechanism for an interpreter to keep track of its place in a script that calls multiple functions.
 *  - When a script calls a function, the interpreter adds it to the call stack and then starts executing the function.
 */

// function to print First to the console
function first() {
  console.log("First");
}

// function to call first function and print Second to the console
function second() {
  // call first function
  first();

  // print Second to the console
  console.log("Second");
}

// call second function
second();
