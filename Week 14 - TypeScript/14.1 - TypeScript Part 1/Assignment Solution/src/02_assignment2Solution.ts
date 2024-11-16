// Write a function that return true or false based on if a user is 18+


// Function to check if a user is 18+ and return a boolean value
function isAdult(age: number): boolean {
    
    // Return true if the user is 18+ and false otherwise
    return age >= 18;
}

// Call the function and store the result in a variable called ans
const ans = isAdult(20);

// Print the result to the console
console.log(ans); // true