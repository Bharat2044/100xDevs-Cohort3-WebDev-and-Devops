/*
Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second
*/


// Create a counter variable and set it to 1
let counter = 1;

// Create a function called callback that logs the counter variable to the console
function callback() {
    // Clear the console before logging the counter variable
    console.clear();

    // Log the counter variable to the console
    console.log(counter);

    // Increment the counter variable by 1
    counter++;
}

// Call the setInterval function and pass the callback function and 1000 milliseconds as arguments
setInterval(callback, 1000);
