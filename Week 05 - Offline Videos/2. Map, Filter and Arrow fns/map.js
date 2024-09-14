/**
 * map function is used to create a new array by calling a function on each element of the input array.
 * 
 * 
 * Problem Statement:
 *      - Create an array of numbers
 *      - Multiply each element by 2 using map function
 *      - Print the new array
 * 
 * Input: [1, 2, 3, 4, 5]
 * Output: [2, 4, 6, 8, 10]
 */


// create an array of numbers
let arr = [1, 2, 3, 4, 5];

/*
// Multiply each element by 2 using for loop and normal function and store it in a new array
// create an empty array
let newArr = [];

// Iterate over the array
for (let i = 0; i < arr.length; i++) {
    // Multiply each element by 2 and store it in a new array
    newArr.push(arr[i] * 2);
}

// Print the new array
console.log(newArr); // [2, 4, 6, 8, 10]
*/


/*
// Multiply each element by 2 using map function and normal function and store it in a new array
let newArr = arr.map(function(value) {
    return value * 2;
});

// Print the new array
console.log(newArr); // [2, 4, 6, 8, 10]
*/


// Multiply each element by 2 using map function and arrow function and store it in a new array
let newArr = arr.map((value) => {
    return value * 2;
});

// let newArr = arr.map((value) => value * 2);

// Print the new array
console.log(newArr); // [2, 4, 6, 8, 10]
