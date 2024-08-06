// 1. Write a function sum that finds the `sum` of two numbers. 
function sum(a, b) {
    // calculates the sum of a and b and stores it in the variable `total`
    let total = a + b;

    // returns the value of `total`
    return total;
}

let ans1 = sum(5, 10);
console.log(ans1); // 15

// 2. Side quest - Try passing in a string instead of a number and see what happens?
let ans2 = sum("5", "6"); 
console.log(ans2); // 56


// 3. Write a function called `canVote` that returns true or false if the `age` of a user is > 18
function canVote(age) {
    // if age is greater than 18, it returns true, else it returns false
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

let ans3 = canVote(20);
console.log(ans3); // true
