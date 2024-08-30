/*
You have been given an express server which has a few endpoints.

Your task is to
1. Ensure that if there is ever an exception, the end user sees a status code of 404
2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint
*/

// import express module using require function and store it in express variable
const express = require("express");

// create an express application using express function
const app = express();

// create a global variable errorCount and assign it a value of 0
let errorCount = 0;

app.get("/user", function (req, res) {
    throw new Error("Some Error");
    res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
    res.status(200).json({ msg: "created dummy user" });
});

app.get("/errorCount", function (req, res) {
    res.status(200).json({ errorCount });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(404).send({});
    errorCount++;
});

// Start the server on port 3000
app.listen(3000);
