/**
 * Filter function is used to filter out the elements from an array based on a condition.
 * It returns a new array with the elements that satisfy the condition.
 * 
 * 
 * Problem Statement:
 *      - Create an array of numbers
 *      - Filter out the even numbers from the array using filter function
 *      - Print the new array
 * 
 * Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * Output: [2, 4, 6, 8, 10]
 */

// create an array of numbers
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
// Filter out the even numbers from the array using for loop and normal function and store it in a new array
// create an empty array
let newArr = [];

// Iterate over the array
for (let i = 0; i < arr.length; i++) {
    // Check if the element is even
    if (arr[i] % 2 === 0) {
        // If the element is even, push it to the new array
        newArr.push(arr[i]);
    }
}

// Print the new array
console.log(newArr); // [2, 4, 6, 8, 10]
*/


/*
// Filter out the even numbers from the array using filter function and normal function and store it in a new array
let newArr = arr.filter(function(value) {
    return value % 2 === 0;
});

// Print the new array
console.log(newArr); // [2, 4, 6, 8, 10]
*/


// Filter out the even numbers from the array using filter function and arrow function and store it in a new array
let newArr = arr.filter((value) => {
    return value % 2 === 0;
});

// let newArr = arr.filter((value) => value % 2 === 0);

// Print the new array
console.log(newArr); // [2, 4, 6, 8, 10]



/**
 * Problem Statement:
 *     - Create an array of names
 *     - Filter out the names starting with letter 'H' using filter function and arrow function and store it in a new array
 *     - Print the new array
 * Input: ['Harkirat', 'Bharat', 'Harry', 'Hermione', 'Ron', 'Hagrid']
 * Output: ['Harkirat', 'Harry', 'Hermione', 'Hagrid']
 */
// create an array of names
let names = ['Harkirat', 'Bharat', 'Harry', 'Hermione', 'Ron', 'Hagrid'];

// Filter out the names starting with letter 'H' using filter function and arrow function and store it in a new array
let newNames = names.filter((name) => {
    // return name[0] === 'H';
    return name.startsWith('H');
});

// let newNames = names.filter((name) => name[0] === 'H');

// Print the new array
console.log(newNames); // ['Harkirat', 'Harry', 'Hermione', 'Hagrid']