/*
Create a middleware function that logs the method, URL and timestamp of the request
*/

// import express module using require function and store it in express variable
const express = require("express");

// create an express application using express function
const app = express();

// create a middleware function that logs the method, URL and timestamp of the request
function loggerMiddleware(req, res, next) {
    // log the method, URL and timestamp of the request
    console.log(`Method: ${req.method}`);
    console.log(`URL: ${req.protocol}://${req.get('host')}${req.url}`);
    console.log(`Timestamp: ${new Date()}`);

    // call the next middleware function in the stack
    next();
}

// use the loggerMiddleware for all routes
app.use(loggerMiddleware);

// create a get route with the path /sum
app.get("/sum", function (req, res) {
    // get the values of a and b from the query parameters and convert them to integers
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    // send the sum of a and b as a response in json format
    res.json({
        ans: a + b,
    });
});

// create a get route with the path /subtract
app.get("/subtract", function (req, res) {
    // get the values of a and b from the query parameters and convert them to integers
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    // send the difference of a and b as a response in json format
    res.json({
        ans: a - b,
    });
});

// create a get route with the path /multiply
app.get("/multiply", function (req, res) {
    // get the values of a and b from the query parameters and convert them to integers
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    // send the product of a and b as a response in json format
    res.json({
        ans: a * b,
    });
});

// create a get route with the path /divide
app.get("/divide", function (req, res) {
    // get the values of a and b from the query parameters and convert them to integers
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    // send the division of a and b as a response in json format
    res.json({
        ans: a / b,
    });
});

// Start the server on port 3000
app.listen(3000);
