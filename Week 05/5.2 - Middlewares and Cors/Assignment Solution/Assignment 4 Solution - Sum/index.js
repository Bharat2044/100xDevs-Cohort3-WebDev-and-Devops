/*
Assignment #4 - Create a backend server in node.js, that returns the sum endpoint
*/


// import express module using require function and store it in express variable
const express = require("express");

// create an express application using express function
const app = express();

// use the express.json middleware to parse the request body
app.use(express.json());

// Function to validate input numbers
function validateInput(a, b) {

    // check if a or b is not provided or not a number, then return false
    if ((!a || !b) || (isNaN(a) || isNaN(b))) {
        return false;
    } 

    // return true if a and b are provided and are numbers
    return true;
}

// create a route for the sum
app.post("/sum", (req, res) => {
    // get the values of a and b from the request body
    const a = req.body.a;
    const b = req.body.b;

    // check if a or b is not provided or not a number, then send an error response
    if (!validateInput(a, b)) {
        res.status(400).send({
            error: "Please provide values for a and b and must be integers",
        });
    }

    // send the result of adding a and b as a response to the client
    res.send({
        result: parseInt(a) + parseInt(b),
    });
});

// Start the server on port 3000
app.listen(3000);
