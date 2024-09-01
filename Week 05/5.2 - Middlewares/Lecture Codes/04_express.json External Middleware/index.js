// Import the express module using require function and store it in express variable
const express = require("express");

// Import the body-parser module using require function and store it in bodyParser variable
const bodyParser = require("body-parser");

// create an express application using express function
const app = express();

// Middleware to parse the request body as JSON 
// app.use(express.json());

// Middleware to parse the request body as JSON using body-parser
app.use(bodyParser.json());

// create a get route with the path /sum
app.get("/sum", function (req, res) {
    // get the values of a and b from the query parameters and convert them to integers
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    // send the sum of a and b as a response in json format
    res.json({
        ans: a + b,
    });
});

// Server listens on port 3000
app.listen(3000);