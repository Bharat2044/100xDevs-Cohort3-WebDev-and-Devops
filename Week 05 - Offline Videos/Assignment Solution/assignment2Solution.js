/*
Assignment #2 - Create a map functions that takes an array and a transform function 
as input and returns the transformed array as output
*/


// Function to map an array to a new one using a transformation function
function map(array, transformFunc) {
    // Initialize an empty array to store transformed elements
    const transformedArray = [];

    // Loop through each element in the input array
    for (let i = 0; i < array.length; i++) {
        // Apply the transformation function to each element and push to the new array
        transformedArray.push(transformFunc(array[i]));
    }

    // Return the new transformed array
    return transformedArray;
}

// Test the map function with an example
const names = ["Alice", "Bob", "Charlie"];

// Transformation function to add a greeting to each name
const addGreeting = (name) => `Hello, ${name}!`;

// Apply the map function to add a greeting to each name in the names array
const greetings = map(names, addGreeting);

// Print the transformed array
console.log(greetings); // Output: ["Hello, Alice!", "Hello, Bob!", "Hello, Charlie