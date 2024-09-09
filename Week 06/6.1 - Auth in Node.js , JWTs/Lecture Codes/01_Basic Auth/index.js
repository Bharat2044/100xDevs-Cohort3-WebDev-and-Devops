// Import the express library 
const express = require('express');

// Create an instance of express application
const app = express();

// Use the express.json() middleware to parse the request body 
app.use(express.json());

// Create an array to store the users username and password
const users = [];

/*
[
    {
        username: "Bharat",
        password: "Bharat@123",
        token: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6" 
    }
]
*/

// Create a function to generate a token for the user
function generateToken() {

    // Create an array of options for the token 
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    // Create a variable to store the token
    let token = "";

    // Loop through the options array and generate a token
    for (let i = 0; i < 32; i++) {

        // Add a random character from the options array to the token
        token += options[Math.floor(Math.random() * options.length)];
    }

    // Return the token
    return token;
}

// Create a post request for the signup route
app.post("/signup", function(req, res) {

    // Get the username and password from the request body
    const username = req.body.username;
    const password = req.body.password;

    // Check if the user is already signed up or not
    if (users.find(user => user.username === username)) {
        // Send a response to the client that the user is already signed up
        return res.json({
            message: "You are already signed up!"
        });
    } 

    // Check if the username has at least 5 characters or not
    if (username.length < 5) {
        // Send a response to the client that the username should have at least 5 characters
        return res.json({
            message: "You need to have at least 5 users to sign up"
        });
    } 

    // Push the username and password to the users array
    users.push({
        username: username,
        password: password
    });

    // Send a response to the client that the user has signed up successfully
    res.json({
        message: "You have signed up successfully!"
    });
});

// Create a post request for the signin route
app.post("/signin", function(req, res) {
    // Get the username and password from the request body
    const username = req.body.username;
    const password = req.body.password;

    // Find the user in the users array with the given username and password 
    const foundUser = users.find(user => user.username === username && user.password === password);

    // Check if the user is found or not
    if (foundUser) {
        // Generate a token for the user
        const token = generateToken();

        // Add the token to the user object
        foundUser.token = token;

        // Send a response to the client with the token
        return res.json({
            token: token,
            message: "You have signed in successfully!",
        });
    } else {
        // Send a response to the client that the user is not found
        return res.json({
            message: "Invalid username or password!"
        });
    }
});

// Create a get request for the me route
app.get("/me", function(req, res) {
    // Get the token from the request headers
    const token = req.headers.token;

    // Check if the token is present or not
    if (!token) {
        return res.json({
            message: "Token is missing!"
        });
    }

    // Find the user in the users array with the given token
    const foundUser = users.find(user => user.token === token);

    // Check if the user is found or not 
    if (foundUser) {
        // Send a response to the client with the username and password of the user
        return res.json({
            username: foundUser.username,
            password: foundUser.password
        });
    } else {
        // Send a response to the client that the token is invalid
        return res.json({
            message: "Invalid token!"
        });
    }
});

// Start the server on port 3000 
app.listen(3000);
