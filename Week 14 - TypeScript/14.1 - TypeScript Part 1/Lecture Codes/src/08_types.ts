// Create a type SumInput that can be either a string or a number.
type SumInput = string | number; // | is called union in TypeScript

// Create a function sum that takes two arguments of type SumInput and returns a SumInput.
function sum(a: SumInput, b: SumInput): SumInput {

    // If either of the arguments is a string, return the concatenation of the two arguments.
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }

    // If both of the arguments are numbers, return the sum of the two arguments
    return a + b; 
}

// Call the sum function with two numbers and log the result.
sum(1, 2);