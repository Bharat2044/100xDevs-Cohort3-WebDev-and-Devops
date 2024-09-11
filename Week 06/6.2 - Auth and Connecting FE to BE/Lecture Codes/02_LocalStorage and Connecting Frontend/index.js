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

// Create a middleware function to log the request method
function logger (req, res, next) {
    // Log the request method to the console
    console.log(`${req.method} request came`);
    
    // Call the next middleware function
    next();
}

// Create a get request for the root route
app.get("/", function (req, res) {
    // Send the index.html file to the client using the res.sendFile() function
    res.sendFile(__dirname + "/public/index.html");
});

// Create a post request for the signup route
app.post("/signup", logger, function (req, res) {
    // Get the username and password from the request body
    const username = req.body.username;
    const password = req.body.password;

    // Check if the user is already exists in the users array or not
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
        message: "You are signed up successfully!",
    });
});

// Create a post request for the signin route
app.post("/signin", logger, function (req, res) {
    // Get the username and password from the request body
    const username = req.body.username;
    const password = req.body.password;

    // Find the user in the users array with the given username and password
    const foundUser = users.find((user) => user.username === username && user.password === password);

    // Check if the user is found or not
    if (foundUser) {
        // Create a token using the jwt.sign() function
        const token = jwt.sign(
            {
                username, // username: foundUser.username,
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

// Create a middleware function to authenticate the user
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

    // Use a try-catch block to handle the error
    try {
        // Verify the token using the jwt.verify() function
        const decodedData = jwt.verify(token, JWT_SECRET);

        // Set the username in the request object
        req.username = decodedData.username;

        // Call the next middleware function
        next();
    } catch (error) {
        // Send a response to the client that the token is invalid
        return res.json({
            message: "Invalid token!",
        });
    }
}

// Create a get request for the me route
app.get("/me", logger, auth, function (req, res) {
    // Get the current user from the request object
    const currentUser = req.username;

    // Find the user in the users array with the given username
    const foundUser = users.find((user) => user.username === currentUser);

    // Check if the user is found or not
    if (foundUser) {
        // Send a response to the client with the username and password of the user
        return res.json({
            username: foundUser.username,
            password: foundUser.password,
        });
    } else {
        // Send a response to the client that the user is not found
        return res.json({
            message: "User not found!",
        });
    }
});

// Start the server on port 3000
app.listen(3000);
