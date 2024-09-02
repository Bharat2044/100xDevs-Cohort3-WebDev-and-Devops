/*
Assignment #1 - Try converting the calculator assignment to use POST endpoints. 
Check if it works with/without the express.json middleware

1. http://localhost:3000/sum
2. http://localhost:3000/subtract
3. http://localhost:3000/multiply
4. http://localhost:3000/divide

request body:
{
    "a": 10,
    "b": 5
}
*/

// import express module using require function and store it in express variable
const express = require("express");

// create an express application using express function
const app = express();

// use the express.json middleware to parse the request body
app.use(express.json()); // comment this line to see the error

/**
 * This is a middleware function that validates the input values
 * 
 * I am using this from my side to validate the input values - This is optional, which is not mentioned in the assignment
 */
function validateInput(req, res, next) {
    // get the values of a and b from the request body
    const a = req.body.a;
    const b = req.body.b;

    console.log(isNaN(a), isNaN(b));
    

    // check if a or b is not provided
    if (!a || !b) {
        // send a response with status code 400 and an error message
        res.status(400).send({
            error: "Please provide values for a and b",
        });
    } else if (isNaN(a) || isNaN(b)) {
        // check if a or b is not a number
        // send a response with status code 400 and an error message
        res.status(400).send({
            error: "Please provide valid numbers for a and b",
        });
    } else {
        // call the next middleware function
        next();
    }
}

// use the validateInput middleware for all routes
app.use(validateInput);

// create a route for the sum
app.post("/sum", (req, res) => {
    // get the values of a and b from the request body and convert them to integers and store them in a and b variables
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    // send the result of adding a and b as a response to the client
    res.send({
        result: a + b,
    });
});

// create a post route for subtract
app.post("/subtract", (req, res) => {
    // get the values of a and b from the request body and convert them to integers and store them in a and b variables
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    // send the result of subtracting a from b as a response to the client
    res.send({
        result: a - b,
    });
});

// create a post route for multiply
app.post("/multiply", (req, res) => {
    // get the values of a and b from the request body and convert them to integers and store them in a and b variables
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    // send the result of multiplying a and b as a response to the client
    res.send({
        result: a * b,
    });
});

// create a post route for divide
app.post("/divide", (req, res) => {
    // get the values of a and b from the request body and convert them to integers and store them in a and b variables
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    // send the result of dividing a and b as a response to the client
    res.send({
        result: a / b,
    });
});

// Start the server on port 3000
app.listen(3000);
