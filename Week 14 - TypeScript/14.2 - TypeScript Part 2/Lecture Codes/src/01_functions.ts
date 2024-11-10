// Create a function that takes a name as an argument and returns a greeting message
function greet(name: string): string {
    // retung a greeting message
    return "Hello " + name;
}

// Call the function and store the result in a variable called greeting
let greeting = greet("Bharat");

// Print the result to the console
console.log(greeting); // Hello Bharat


// Create a function that takes two numbers as arguments and returns the sum of the two numbers
function sum(a: number, b: number): number {
    // return the sum of the two numbers
    return a + b;
}

// Call the function and store the result in a variable called result
let result = sum(10, 20);

// Print the result to the console
console.log(result); // 30


// Create a function that takes a number as an argument and returns true if the number is even, false otherwise
function isEven(num: number): boolean {
    // return true if the number is even, false otherwise
    return num % 2 === 0;
}

// Call the function and store the result in a variable called even
let even = isEven(10);

// Print the result to the console using a conditional statement to print "Even" if the even variable is true, otherwise "Odd"
if (even) {
    console.log("Even"); // Even
} else {
    console.log("Odd"); 
}