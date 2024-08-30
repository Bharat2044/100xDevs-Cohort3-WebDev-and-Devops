// import express module using require function and store it in express variable
const express = require("express");

// create an express application using express function
const app = express();

// This function is a middleware function that checks if the age of the person is greater than 14
function isOldEnoughMiddleware(req, res, next) {
    // get the age from the query parameter of the request object and store it in age variable
    const age = req.query.age;

    // if age is greater than 14, call the next middleware function else return a status code 411 with message "Sorry!, your age is not enough to ride"
    if (age > 14) {
        next();
    } else {
        res.status(411).json({
            message: "Sorry!, your age is not enough to ride yet",
        });
    }
}

// use the middleware function isOldEnoughMiddleware for all the routes below this line of code in the file 
app.use(isOldEnoughMiddleware);

// create a route for GET request on /files path
// http://localhost:3000/ride1?age=10
app.get("/ride1", function (req, res) {
    // if the age is enough to ride the ride 1, return a json response with message "You have successfully riden the ride 1"
    res.json({
        message: "You have successfully riden the ride 1",
    });
});

// create a route for GET request on /files path
// http://localhost:3000/ride2?age=20
app.get("/ride2", function (req, res) {
    // if the age is enough to ride the ride 2, return a json response with message "You have successfully riden the ride 2"
    res.json({
        message: "You have successfully riden the ride 2",
    });
});

// Start the server on port 3000
app.listen(3000);

/*
// import express module using require function and store it in express variable
const express = require("express");

// create an express application using express function
const app = express();

// This function is a middleware function that checks if the age of the person is greater than 14
function isOldEnoughMiddleware(req, res, next) {
    // get the age from the query parameter of the request object and store it in age variable
    const age = req.query.age;

    // if age is greater than 14, call the next middleware function else return a status code 411 with message "Sorry!, your age is not enough to ride"
    if (age > 14) {
        next();
    } else {
        res.status(411).json({
            message: "Sorry!, your age is not enough to ride yet",
        });
    }
}

// create a route for GET request on /files path
// http://localhost:3000/ride1?age=10
app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
    // if the age is enough to ride the ride 1, return a json response with message "You have successfully riden the ride 1"
    res.json({
        message: "You have successfully riden the ride 1",
    });
});

// create a route for GET request on /files path
// http://localhost:3000/ride2?age=20
app.get("/ride2", isOldEnoughMiddleware, function (req, res) {
    // if the age is enough to ride the ride 2, return a json response with message "You have successfully riden the ride 2"
    res.json({
        message: "You have successfully riden the ride 2",
    });
});

// Start the server on port 3000
app.listen(3000);
*/

/*
// import express module using require function and store it in express variable
const express = require("express");

// create an express application using express function
const app = express();

// Function that returns a boolean value if the age of the person is greater than 14
function isOldEnough(age) {
    // if age is greater than 14 return true, else return false
    if (age > 14) {
        return true;
    } else {
        return false;
    }
}

// create a route for GET request on /files path
app.get("/ride1", function (req, res) {
    // if the age is enough to ride the ride 1, return a json response with message "You have successfully riden the ride 1" else return a status code 411 with message "Sorry your age is not enough to ride the ride 1"
    if (isOldEnough(req.query.age)) {
        res.json({
            message: "You have successfully riden the ride 1",
        });
    } else {
        res.status(411).json({
            message: "Sorry your age is not enough to ride the ride 1",
        });
    }
});

// create a route for GET request on /files path
app.get("/ride2", function (req, res) {
    // if the age is enough to ride the ride 2, return a json response with message "You have successfully riden the ride 2" else return a status code 411 with message "Sorry your age is not enough to ride the ride 2"
    if (isOldEnough(req.query.age)) {
        res.json({
            message: "You have successfully riden the ride 2",
        });
    } else {
        res.status(411).json({
            message: "Sorry your age is not enough to ride the ride 2",
        });
    }
});

// Start the server on port 3000
app.listen(3000);
*/
