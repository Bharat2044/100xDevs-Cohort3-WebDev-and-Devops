// function to return length of the string
function getLength(name) {
    return name.length;
}

// call getLength() function with argument "Bharat"
const ans1 = getLength("Bharat");

// print ans1 to console
console.log(ans1);

/*
// call getLength() function without argument
const ans2 = getLength();

// print ans2 to console
console.log(ans2); // This will throw an error
*/

// try block to handle error
try {
    // call getLength() function without argument
    const ans3 = getLength();

    // print ans3 to console
    console.log(ans3);
} catch (error) {
    // print error message to console
    console.log(error.message);
}

