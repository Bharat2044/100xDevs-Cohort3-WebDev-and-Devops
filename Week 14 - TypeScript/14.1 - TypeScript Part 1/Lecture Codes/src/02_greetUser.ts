// Function that takes a string as an argument and logs a greeting message to the console
function greet(firstName: string): void {

    // Log the greeting message to the console with the name of the user
    console.log(`Hello, ${firstName}!`);
}

// Call the greet function with a string argument 
greet('Bharat');


// Arrow function that takes a string as an argument and logs a greeting message to the console
let greetUser = (firstName: string): void => {
    console.log(`Hello, ${firstName}!`);
}

// Call the greetUser function with a string argument 
greetUser('Deepak');