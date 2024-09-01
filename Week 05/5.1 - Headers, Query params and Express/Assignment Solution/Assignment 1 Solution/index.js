/*
## Assignment #1 - Create an HTTP Server
It should have 4 routes

1. http://localhost:3000/sum/1/2
2. http://localhost:3000/subtract/1/2
3. http://localhost:3000/multiply/1/2
4. http://localhost:3000/divide/1/2
*/

// import express module using require function and store it in express variable
const express = require("express");

// create an express application using express function
const app = express();

// create a route for sum
app.get("/sum/:num1/:num2", (req, res) => {
    // get the values of num1 and num2 from the request parameters and store them in num1 and num2 variables
    const { num1, num2 } = req.params;

    // send the result of adding num1 and num2 as a response to the client
    res.send({
        result: parseInt(num1) + parseInt(num2),
    });
});

// create a route for subtract
app.get("/subtract/:num1/:num2", (req, res) => {
    // get the values of num1 and num2 from the request parameters and store them in num1 and num2 variables
    const { num1, num2 } = req.params;

    // send the result of subtracting num2 from num1 as a response to the client
    res.send({
        result: parseInt(num1) - parseInt(num2),
    });
});

// create a route for multiply
app.get("/multiply/:num1/:num2", (req, res) => {
    // get the values of num1 and num2 from the request parameters and store them in num1 and num2 variables
    const { num1, num2 } = req.params;

    // send the result of multiplying num1 by num2 as a response to the client
    res.send({
        result: parseInt(num1) * parseInt(num2),
    });
});

// create a route for divide
app.get("/divide/:num1/:num2", (req, res) => {
    // get the values of num1 and num2 from the request parameters and store them in num1 and num2 variables
    const { num1, num2 } = req.params;

    // send the result of dividing num1 by num2 as a response to the client
    res.send({
        result: parseInt(num1) / parseInt(num2),
    });
});

// Start the server on port 3000
app.listen(3000);
