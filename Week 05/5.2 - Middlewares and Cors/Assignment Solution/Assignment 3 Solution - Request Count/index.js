/*
Assignment #3 - Create a middleware that counts total number of requests sent to a server. 
Also create an endpoint that exposes it
*/


// Import the express module and store it in a variable called express
const express = require('express');

// Create an express application instance and store it in a variable called app
const app = express();

// create a global variable requestCount and assign it a value of 0 to store the total number of requests
let requestCount = 0;

// Middleware to count incoming requests
function countRequests(req, res, next) {
    // Increment the counter for each request
    requestCount++;

    // Pass control to the next middleware or route handler
    next();
}

// Use the middleware for all routes
app.use(countRequests);

// Create a route that exposes the total number of requests
app.get('/requestCount', (req, res) => {
    res.send({
        totalRequests: requestCount
    });
});

// Create a route that responds to GET requests 
// This route can handle any URL
app.get('*', (req, res) => {
    res.send('Hi there!');
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

