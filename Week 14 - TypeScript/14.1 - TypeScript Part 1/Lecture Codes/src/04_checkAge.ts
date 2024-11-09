// funtion takes in a number and returns a boolean 
function isLegal(age: number): boolean {
    // if the age is greater than 18, return true else return false
    if (age > 18) {
        return true;
    } else { // if the age is less than or equal to 18, return false
        return false;
    }
}

// Call the function with different arguments and log the result to the console
console.log(isLegal(2));
console.log(isLegal(20));
