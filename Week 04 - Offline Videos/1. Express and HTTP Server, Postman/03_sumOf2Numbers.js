// import express module using require function and store it in express variable
const express = require('express');

// create an express application using express function
const app = express();

// create a function to calculate the sum of two numbers
function sumOfTwoNumbers(a, b) {
    // add a and b and store the result in sum variable
    const sum = a + b;

    // return the sum of two numbers
    return sum;
}

/**
 * create a route for the root URL to calculate the sum of two numbers
 * 
 * URL - localhost:3000/?a=5&b=10
 */ 
app.get("/", function(req, res) {
    // get the value of a and b from the query parameters using req.query object and parse them to integers using parseInt function
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    // call the sumOfTwoNumbers function and pass a and b as arguments to calculate the sum of two numbers and store it in sum variable
    const sum = sumOfTwoNumbers(a, b);

    // send the response to the client with the sum of two numbers
    res.send("Sum of " + a + " and " + b + " is: " + sum);
});

// Start the server on port 3000
app.listen(3000);