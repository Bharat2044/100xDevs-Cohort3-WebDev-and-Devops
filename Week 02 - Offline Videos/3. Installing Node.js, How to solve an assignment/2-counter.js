/*
Counter without setInterval

Without using setInterval, try to code a counter in Javascript. 

There is a hint at the bottom of the file if you get stuck.
setTimeout();
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

    // Call the setTimeout function and pass the callback function and 1000 milliseconds as arguments
    setTimeout(callback, 1000);
}

// Call the setInterval function and pass the callback function and 1000 milliseconds as arguments
setTimeout(callback, 1000);