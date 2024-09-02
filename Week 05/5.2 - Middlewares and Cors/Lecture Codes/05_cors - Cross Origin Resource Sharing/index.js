/**
 * Use the following command to run this file
 *  $ cd public
 *  $ npx serve
 *
 * npx server command is used to serve a foler over http server
 */

// Import the express module using require function and store it in express variable
const express = require("express");

// Import the cors module using require function and store it in cors variable
const cors = require("cors");

// create an express application using express function
const app = express();

// Middleware to parse the request body as JSON
app.use(express.json());

// Middleware to enable CORS
app.use(cors());

/*
// Middleware to enable CORS with options 
app.use(cors(), {
    origin: "http://localhost:5000",
    methods: "GET, POST",
    allowedHeaders: "Content-Type, Authorization",
    hosts: ["localhost:5000", "localhost:3000"],
});
*/

// create a post route with the path /sum
app.post("/sum", function (req, res) {
    // get the values of a and b from the query parameters and convert them to integers
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    // log the values of a and b
    console.log(a, b);

    // send the sum of a and b as a response in json format
    res.json({
        ans: a + b,
    });
});

/**
 * If Both backend and frontend are running on the same server, then we don't need to enable CORS
 */
// create a get route with the path /
app.get("/", function (req, res) {

    // send the index.html file as a response
    res.sendFile(__dirname + "/public/index.html");
});

// Server listens on port 3001
app.listen(3001);
