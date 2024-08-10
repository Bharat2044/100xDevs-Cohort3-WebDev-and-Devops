// function to add two numbers
function sum(a, b) {
  return a + b;
}

// function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

// function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// function to divide two numbers
function divide(a, b) {
  return a / b;
}

// function to do an operation on two numbers
function doOperation(a, b, op) {
  // return op(a, b);
  let val = op(a, b);
  return val;
}

// print the sum of 1 and 2
console.log(sum(1, 2)); // 3

// print the multiplication of 2 and 5
console.log(multiply(2, 5)); // 10
