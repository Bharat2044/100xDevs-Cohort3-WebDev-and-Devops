// Function that takes another function as an argument and calls it after 1 second delay
function delayedCall(anotherFn: () => void) {
    // setTimeout is a built-in JavaScript function that calls the function passed as the first argument after the time specified in the second argument
    // In this case, it will call anotherFn after 1 second
    setTimeout(anotherFn, 1000);
}

// Funwction that logs "Hello" to the console when called 
function log() {
    console.log("Hello"); // Hello will be printed after 1 second
}

// Call delayedCall with the log function as an argument
delayedCall(log); 