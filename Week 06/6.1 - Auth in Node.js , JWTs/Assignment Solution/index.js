/*
Assignment #1 - Creating an auth middleware

Can you try creating a `middleware` called `auth` that verifies if a user is logged in and 
ends the request early if the user isn’t logged in?
*/

// Import the express library
const express = require("express");

// Import the jsonwebtoken library
const jwt = require("jsonwebtoken");

// Create an instance of express application
const app = express();

// Use the express.json() middleware to parse the request body
app.use(express.json());

// Create an array to store the users username and password
const users = [];

// Create a secret key for the jwt token
const JWT_SECRET = "ilove100xdevsliveclasses";

// Create a post request for the signup route
app.post("/signup", function (req, res) {
    // Get the username and password from the request body
    const username = req.body.username;
    const password = req.body.password;

    // Check if the user is already signed up or not
    if (users.find((user) => user.username === username)) {
        // Send a response to the client that the user is already signed up
        return res.json({
            message: "You are already signed up!",
        });
    }

    // Check if the username has at least 5 characters or not
    if (username.length < 5) {
        // Send a response to the client that the username should have at least 5 characters
        return res.json({
            message: "You need to have at least 5 users to sign up",
        });
    }

    // Push the username and password to the users array
    users.push({
        username: username,
        password: password, 
    });

    // Send a response to the client that the user has signed up successfully
    res.json({
        message: "You have signed up successfully!",
    });
});

// Create a post request for the signin route
app.post("/signin", function (req, res) {
    // Get the username and password from the request body
    const username = req.body.username;
    const password = req.body.password;

    // Find the user in the users array with the given username and password
    const user = users.find((user) => user.username === username && user.password === password);

    // Check if the user is found or not
    if (user) {
        // Create a token using the jwt.sign() function
        const token = jwt.sign(
            {
                username: user.username,
            },
            JWT_SECRET
        );

        // Send a response to the client with the token
        return res.json({
            message: "You have signed in successfully!",
            token: token,
        });
    } else {
        // Send a response to the client that the user is not found
        return res.json({
            message: "Invalid username or password!",
        });
    }
});

// Create a middleware called auth to verify if the user is logged in or not
function auth(req, res, next) {
    // Get the token from the request headers
    const token = req.headers.authorization;

    // Check if the token is present or not
    if (!token) {
        // Send a response to the client that the token is missing
        return res.json({
            message: "Token is missing!",
        });
    } 

    // Verify the token using the jwt.verify() function
    jwt.verify(token, JWT_SECRET, function (err, decoded) {
        // Check if the token is valid or not
        if (err) {
            // Send a response to the client that the token is invalid
            return res.json({
                message: "Unauthorized!",
            });
        }

        // console.log(decoded);        

        // Add the user object to the request object
        req.user = decoded;

        // Call the next middleware only if the token is valid
        next();
    });
}

// Create a get request for the me route
app.get("/me", auth, function (req, res) {
    // Get the user object from the request object
    const user = req.user;

    // Send a response to the client with the user object
    res.json({
        username: user.username,
    });
});

// Start the server on port 3000
app.listen(3000);
