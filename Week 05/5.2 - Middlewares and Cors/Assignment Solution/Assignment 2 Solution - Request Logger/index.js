/*
Assignment #2 - Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
*/

// Import the express module and store it in a variable called express
const express = require("express");

// Create an express application instance and store it in a variable called app
const app = express();

// Middleware function to print HTTP method, URL, and timestamp to the console for each incoming request
function requestLogger(req, res, next) {
    /*
    console.log(req.protocol);
    console.log(req.host);
    console.log(req.url);
    console.log(req.originalUrl);
    */
    // Log the HTTP method, Complete URL, and timestamp to the console
    console.log(req.method);
    console.log(`${req.protocol}://${req.get("host")}${req.url}`);
    console.log(new Date());

    // Pass control to the next middleware function
    next();
}

// Use the middleware in the app
app.use(requestLogger);

// Create a route that responds to GET requests
// This route can handle any URL 
app.get("*", (req, res) => {
    res.send("Hi there!");
});

// Create a route that responds to POST requests
app.post("*", (req, res) => {
    res.send("Hello!");
});

// Create a route that responds to PUT requests
app.put("*", (req, res) => {
    res.send("Welcome!");
});

// Create a route that responds to DELETE requests
app.delete("*", (req, res) => {
    res.send("Goodbye!");
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
