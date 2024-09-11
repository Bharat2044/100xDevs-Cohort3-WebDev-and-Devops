/*
Assignment #1 - Conditionally render the `logout` or the `signin`/ `signup` pages 
based on if the user is already logged in or not
*/

// Import the express library
const express = require("express");

// Import the jsonwebtoken library
const jwt = require("jsonwebtoken");

// Create an instance of express application
const app = express();

// Use the express.json() middleware to parse the request body
app.use(express.json());

// Create an array to store users' usernames and passwords
const users = [];

// Create a secret key for the JWT token
const JWT_SECRET = "ilove100xdevsliveclasses";

// Middleware function to log the request method
function logger(req, res, next) {
    // Log the request method to the console
    console.log(`${req.method} request received`);

    // Call the next middleware function
    next();
}

/*
// Serve the static files from the public directory using the express.static() middleware
app.use(express.static("public"));
*/

// Serve the index.html file when accessing the root route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Signup route to register a new user
app.post("/signup", logger, (req, res) => {
    // Get the username and password from the request body
    const { username, password } = req.body;

    if (!username || !password) {
        return res.json({
            message: "Username and password are required.",
        });
    }

    // Check if the username has at least 5 characters
    if (username.length < 5) {
        return res.json({
            message: "Username must have at least 5 characters.",
        });
    }

    // Check if the user already exists in the users array
    if (users.find((user) => user.username === username)) {
        return res.json({
            message: "You are already signed up!",
        });
    }

    // Add the new user to the users array
    users.push({ username, password });

    // Send a success message to the client
    res.json({
        message: "You have signed up successfully!",
    });
});

// Signin route to authenticate a user
app.post("/signin", logger, (req, res) => {
    // Get the username and password from the request body
    const { username, password } = req.body;

    if (!username || !password) {  
        return res.json({
            message: "Username and password are required.",
        });
    }

    // Check if the user exists with the provided credentials
    const foundUser = users.find((user) => user.username === username && user.password === password);

    // Generate a token if the user is found
    if (foundUser) {
        // Generate a token using the secret key
        const token = jwt.sign({ username }, JWT_SECRET);

        // Send the token to the client if the user is found and authenticated
        res.json({
            token,
            message: "You are signed in successfully!",
        });
    } else {
        // Send an error message if the user is not found
        res.json({
            message: "Invalid username or password!",
        });
    }
});

// Middleware function to authenticate the user based on the token
function auth(req, res, next) {
    // Get the token from the request headers
    const token = req.headers.authorization;

    // Check if the token is provided
    if (!token) {
        return res.json({
            message: "Token is missing!",
        });
    }

    // Handle the error if the token is invalid
    try {
        // Verify the token using the secret key
        const decodedData = jwt.verify(token, JWT_SECRET);

        // Attach the username to the request object
        req.username = decodedData.username;
        next();
    } catch (error) {
        // Send an error message if the token is invalid
        res.json({
            message: "Invalid token!",
        });
    }
}

// Route to get the authenticated user's information
app.get("/me", logger, auth, (req, res) => {
    // Get the current user from the request object
    const currentUser = req.username;

    // Find the authenticated user in the users array
    const foundUser = users.find((user) => user.username === currentUser);

    // Send the user's information to the client if found or a message if not found
    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password,
        });
    } else {
        res.json({
            message: "User not found!",
        });
    }
});

// Start the server on port 3000
app.listen(3000);
