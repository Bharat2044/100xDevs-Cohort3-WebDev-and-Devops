/*
You have been given an express server which has a few endpoints.

Your task is to create a global middleware (app.use) which will rate limit the requests from a user to only 5 request per second
If a user sends more than 5 requests in a single second, the server should block them with a 404.
User will be sending in their user id in the header as 'user-id'
You have been given a numberOfRequestsForUser object to start off with which clears every one second
*/

// import express module using require function and store it in express variable
const express = require("express");

// create an express application using express function
const app = express();

// create a global variable numberOfRequestsForUser and assign it an empty object
let numberOfRequestsForUser = {};

// create a setInterval function that clears the numberOfRequestsForUser object every one second
setInterval(() => {
    // clear the numberOfRequestsForUser object every one second
    numberOfRequestsForUser = {};
}, 1000);

// create a middleware function that checks the number of requests made by a user in a single second
app.use(function (req, res, next) {
    // get the user id from the headers of the request object and store it in userId variable
    const userId = req.headers["user-id"];

    // check if the user id is present in the numberOfRequestsForUser object and the number of requests made by the user is greater than 5 in a single second 
    if (numberOfRequestsForUser[userId] > 5) {
        // increment the number of requests made by the user by 1
        numberOfRequestsForUser[userId]++;

        // check if the number of requests made by the user is greater than 5 in a single second then send a 404 status code with message "No Entry!" as response to the user
        if(numberOfRequestsForUser[userId] > 5) {
            res.status(404).send("No Entry!");
        } else {
            next(); // call the next middleware function in the stack
        }
    } else {
        // increment the number of requests made by the user by 1 and call the next middleware function in the stack
        numberOfRequestsForUser[userId] = 1;
        next();
    }
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

// Start the server on port 3000
app.listen(3000);
