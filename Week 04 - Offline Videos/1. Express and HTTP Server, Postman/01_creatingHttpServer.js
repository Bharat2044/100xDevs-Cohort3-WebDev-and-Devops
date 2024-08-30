// import express module using require function and store it in express variable
const express = require('express');

// create an express application using express function
const app = express();

// create a route for the root URL 
app.get("/", function(req, res) {
    // send a response to the client
    res.send("Hi there!");
});

// Start the server on port 3000
app.listen(3000);