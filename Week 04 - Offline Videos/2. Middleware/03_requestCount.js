/*
You have been given an express server which has a few endpoints.

Your task is to create a global middleware (app.use) which will maintain a count of the number of 
requests made to the server in the global requestCount variable
*/

// import express module using require function and store it in express variable
const express = require("express");

// create an express application using express function
const app = express();

// create a global variable requestCount and assign it a value of 0
let requestCount = 0;

// create a middleware function that increments the requestCount by 1 for every request made to the server
app.use(function (req, res, next) {
    // increment the requestCount by 1
    requestCount = requestCount + 1;

    // call the next middleware function in the stack
    next();
});

// create a route for GET request on /user path
app.get("/user", function (req, res) {
    // return a json response with name as Bharat
    res.status(200).json({ name: "Bharat" });
});

// create a route for POST request on /user path
app.post("/user", function (req, res) {
    // return a json response with message "created dummy user
    res.status(200).json({ msg: "created dummy user" });
});

// create a route for GET request on /requestCount path
app.get("/requestCount", function (req, res) {
    // return a json response with requestCount
    res.status(200).json({ requestCount });
});

// Start the server on port 3000
app.listen(3000);
