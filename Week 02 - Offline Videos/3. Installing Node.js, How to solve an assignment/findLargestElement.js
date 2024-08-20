/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // store the first element of the array in a variable called largestElement
    let largestElement = numbers[0];

    // loop through the array starting from the second element
    for (let i = 1; i < numbers.length; i++) {

        // if the current element is greater than the largestElement then update the largestElement to the current element
        if (numbers[i] > largestElement) {
            largestElement = numbers[i];
        }
    }

    // return the largestElement 
    return largestElement;
}

// Test cases
console.log(findLargestElement([3, 7, 2, 9, 1])); // 9
console.log(findLargestElement([3, 7, 2, 9, 1, 10])); // 10
console.log(findLargestElement([3, 7, 2, 9, 1, 10, 10])); // 10
console.log(findLargestElement([12, 7, 2, 9, 1, 10, 10, 10])); // 12

