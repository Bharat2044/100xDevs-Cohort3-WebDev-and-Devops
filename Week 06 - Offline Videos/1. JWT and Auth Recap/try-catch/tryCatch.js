// try block to handle error
try {
    // declare variable a without assigning value
    let a;
    // print length of a to console
    console.log(a.length);

    // print message to console
    console.log("Hi I am inside try block");
} catch (error) {
    // print error message to console
    console.log("Hi I am inside catch block");
}

// print message to console
console.log("Hi I am outside try-catch block");
