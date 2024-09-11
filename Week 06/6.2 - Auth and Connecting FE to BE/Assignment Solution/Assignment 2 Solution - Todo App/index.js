// Import the Express library for building the server
const express = require("express");

// Import the jsonwebtoken library for handling JWTs
const jwt = require("jsonwebtoken");

// Import the path library for handling file paths
const path = require("path");

// Initialize Express app
const app = express(); // Create an instance of the Express application

// Use the express.json() middleware to parse the request body
app.use(express.json()); // Middleware to parse incoming JSON requests

// Store users and TODOs in arrays
const users = []; // Array to store registered users
const todos = []; // Array to store TODO items

// Secret key for JWT
const JWT_SECRET = "ilove100xdevsliveclassse"; // Define a secret key for signing JWTs

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public"))); // Middleware to serve static files from the 'public' folder

// Signup route to register a new user
app.post("/signup", (req, res) => {
    // Extract the username and password from the request body
    const { username, password } = req.body;

    // Check if the username and password are provided
    if (!username || !password) {
        // Send an error message if the username or password is missing
        return res.json({ message: "Username and password fields can't be empty." });
    }

    // Check if the username length is at least 5 characters
    if (username.length < 5) {
        // Send an error message if the username is less than 5 characters
        return res.json({ message: "Username must have at least 5 characters." });
    }

    // Check if the username is already taken
    if (users.find((user) => user.username === username)) {
        // Send an error message if the username is already taken
        return res.json({ message: "You are already signed up!" });
    }

    // Add the new user to the users array
    users.push({ username, password });

    // Send a success response
    res.json({ message: "You are signed up successfully!" });
});

// Signin route to authenticate a user
app.post("/signin", (req, res) => {
    // Extract the username and password from the request body
    const { username, password } = req.body;

    // Check if the username and password are provided
    if (!username || !password) {
        // Send an error message if the username or password is missing
        return res.json({ message: "Username and password are required." });
    }

    // Find the user with the provided username and password
    const foundUser = users.find((user) => user.username === username && user.password === password);

    // If the user is found, generate a JWT token and send it in the response
    if (foundUser) {
        // Generate a JWT token with the username and secret key
        const token = jwt.sign({ username }, JWT_SECRET);

        // Send the token in the response
        res.json({ token, message: "You are signed in successfully!" });
    } else {
        // If the user is not found, send an error message
        res.json({ message: "Invalid username or password!" });
    }
});

// Middleware function to authenticate the user based on the token
function auth(req, res, next) {
    // Extract the token from the Authorization header
    const token = req.headers.authorization;

    // Check if the token is missing
    if (!token) {
        // Send an error message if the token is missing
        return res.json({ message: "Token is missing!" });
    }

    try {
        // Verify the token using the secret key
        const decodedData = jwt.verify(token, JWT_SECRET);

        // Store the username in the request object
        req.username = decodedData.username;

        // Call the next middleware function
        next();
    } catch (error) {
        // If the token is invalid, send an error message
        res.json({ message: "Invalid token!" });
    }
}

// Route to get all To-Dos for the authenticated user
app.get("/todos", auth, (req, res) => {
    // Get the username from the request object
    const currentUser = req.username;

    // Filter the To-Dos based on the username
    const userTodos = todos.filter((todo) => todo.username === currentUser);

    // Send the filtered To-Dos in the response
    res.json(userTodos);
});

// Route to create a new To-Do
app.post("/todos", auth, (req, res) => {
    // Extract the title from the request body
    const { title } = req.body;

    // Get the username from the request object
    const currentUser = req.username;

    // Check if the title is provided
    if (!title) {
        // Send an error message if the title is missing
        return res.json({ message: "To-Do title cannot be empty." });
    }

    // Create a new To-Do object
    const newTodo = {
        id: todos.length + 1, // Generate a unique id
        username: currentUser,
        title,
        done: false, // Default to undone
    };

    // Add the new To-Do to the todos array
    todos.push(newTodo);

    // Send a success response
    res.json({ message: "To-Do created successfully!", todo: newTodo });
});

// Route to update a To-Do
app.put("/todos/:id", auth, (req, res) => {
    // Extract the id from the request parameters
    const { id } = req.params;

    // Extract the title from the request body
    const { title } = req.body;

    // Get the username from the request object
    const currentUser = req.username;

    // Find the To-Do with the provided id and username
    const todo = todos.find((todo) => todo.id === parseInt(id) && todo.username === currentUser);

    // Check if the To-Do is not found
    if (!todo) {
        // Send an error message if the To-Do is not found
        return res.json({ message: "To-Do not found." });
    }

    // Check if the title is provided
    if (!title) {
        // Send an error message if the title is missing
        return res.json({ message: "To-Do title cannot be empty." });
    }

    // Update the title of the To-Do
    todo.title = title;

    // Send a success response
    res.json({ message: "To-Do updated successfully!", todo });
});

// Route to delete a To-Do
app.delete("/todos/:id", auth, (req, res) => {
    // Extract the id from the request parameters
    const { id } = req.params;

    // Get the username from the request object
    const currentUser = req.username;

    // Find the index of the To-Do with the provided id and username
    const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id) && todo.username === currentUser);

    // Check if the To-Do is not found
    if (todoIndex === -1) {
        // Send an error message if the To-Do is not found
        return res.json({ message: "To-Do not found." });
    }

    // Remove the To-Do from the todos array
    todos.splice(todoIndex, 1);

    // Send a success response
    res.json({ message: "To-Do deleted successfully!" });
});

// Route to mark a To-Do as done/undone using PUT
app.put("/todos/:id/done", auth, (req, res) => {
    // Extract the id from the request parameters
    const { id } = req.params;

    // Get the username from the request object
    const currentUser = req.username;

    // Find the To-Do with the provided id and username
    const todo = todos.find((todo) => todo.id === parseInt(id) && todo.username === currentUser);

    // Check if the To-Do is not found
    if (!todo) {
        // Send an error message if the To-Do is not found
        return res.json({ message: "To-Do not found." });
    }

    // Toggle the 'done' status of the To-Do
    todo.done = !todo.done;

    // Send a success response
    res.json({ message: `To-Do marked as ${todo.done ? "done" : "undone"}.`, todo });
});

// Start the server on port 3000
app.listen(3000); 
