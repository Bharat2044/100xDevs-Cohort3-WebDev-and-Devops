// import express module using require function and store it in express variable
const express = require("express");

// create an express application using express function
const app = express();

// console.log(express);
// console.log(app);

// To store the todos in memory, create an empty array
let todos = [];

// create a route handler for POST request on the root URL
app.post("/", function (req, res) {

    // add a new todo to the todos array in memory
    todos.push({
        title: "Learn Node.js",
        id: 1
    });
});

// create a route handler for DELETE request on the root URL 
app.delete("/", function (req, res) {
    // remove the todos from the todos array in memory
    todos = todos.pop();
});

// create a route handler for GET request on the root URL
app.get("/", function (req, res) {
    // send the todos array as a response to the client
    res.send(todos);
});

// start the server on port 3000
app.listen(3000);


/*
// create a route handler for GET request on the root URL
// app.get('/', function (req, res) {
//     // send a response to the client
//     res.send('Hello World!');
// });

app.get("/", (req, res) => {
    // send a response to the client
    // res.send('Hello World!');
    res.send("<h1>Hello World!</h1>");
});

// create a route handler for GET request on the about URL
app.get("/about", (req, res) => {
    // send a response to the client
    res.send("About Page");
});


// create a route handler for POST request on the root URL
app.post("/", function (req, res) {
    res.send("Hello World! from the POST request");
});
*/