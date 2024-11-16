// Create a function that takes another function as input, and runs it after 1 second.


// Function that takes another function as input, and runs it after 1 second
function delayedCall(anotherFn: () => void) {

    // setTimeout will run anotherFn function after 1 second
    setTimeout(anotherFn, 1000);
}

// Function that prints "Hello"
function printHello() {
    // Print "Hello" to the console
    console.log("Hello");
}

// Call delayedCall function with printHello function as input parameter
delayedCall(printHello); // prints "Hello" after 1 second