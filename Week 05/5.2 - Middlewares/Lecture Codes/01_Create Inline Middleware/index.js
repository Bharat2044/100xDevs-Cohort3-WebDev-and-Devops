/*
Create an HTTP Server
It should have 4 routes

1. http://localhost:3000/sum?a=1&b=2
2. http://localhost:3000/subtract?a=1&b=2
3. http://localhost:3000/multiply?a=1&b=2
4. http://localhost:3000/divide?a=1&b=2

Inputs given at the end after `?` are known as query parameters (usually used in GET requests)

The way to get them in an HTTP route is by extracting them from the `req` argument (req.query.a , req.query.b)
*/

// import express module using require function and store it in express variable
const express = require("express");

// create an express application using express function
const app = express();

// create a global variable requestCount to store the total number of requests
let requestCount = 0;

// create a middleware function that logs the total number of requests
function requestIncreaser(req, res, next) {
    // increment the requestCount by 1
    requestCount++;

    // log the total number of requests
    console.log(`Total Number of Requests = ${requestCount}`);

    /*
    // end the request early by sending a response
    res.json({
        message: "I ended the request early"
    });
    */

    // call the next middleware function in the stack
    next();
}

/**
 * This way of difiing middleware is called inline middleware, which is used for a single route
 */

// create a route handler function that calculates the difference of a and b
function realSumHandler(req, res) {
    console.log("Control reached the real sum handler");

    // extract the values of a and b from the query parameters and convert them to integers
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    // send the sum of a and b as a response
    res.json({
        ans: a + b,
    });
}

// create a route handler function that calculates the difference of a and b
function realMultiplyHandler(req, res) {
    console.log("Control reached the real multiply handler");

    // extract the values of a and b from the query parameters and convert them to integers
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    // send the sum of a and b as a response
    res.json({
        ans: a * b,
    });
}

// create a get route with the path /sum
app.get("/sum", requestIncreaser, realSumHandler);

// create a get route with the path /multiply
app.get("/multiply", requestIncreaser, realMultiplyHandler);

// Start the server on port 3000
app.listen(3000);
