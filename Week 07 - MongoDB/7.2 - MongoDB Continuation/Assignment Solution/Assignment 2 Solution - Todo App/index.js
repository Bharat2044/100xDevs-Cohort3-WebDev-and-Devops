/**
 * Assignment #2 - Add more endpoints (mark todo as done) for todo-app.
 *      - Optional: Add timestamp at which todo was created/the time it needs to be done
 */


// Import required modules: express for creating server, mongoose for database, jwt for token handling, bcrypt for password hashing, zod for validation
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const zod = require("zod");

// Import user and todo models from db.js
const { UserModel, TodoModel } = require("./db");

// Import authentication middleware and secret key for JWT
const { auth, JWT_SECRET } = require("./auth");

// Create an instance of the express application
const app = express();

// Use express middleware to automatically parse JSON data in requests
app.use(express.json());

// Connect to MongoDB database using mongoose (MongoDB connection string for a specific cluster)
mongoose.connect("mongodb+srv://100xdevs:WvaTca0509mb90YX@cluster0.ossjd.mongodb.net/todos-app-week-7-2");

// Signup route for creating a new user
app.post("/signup", async function (req, res) {
    // Validate request body data using zod schema (email, password, name must be valid)
    const requireBody = zod.object({
        email: zod.string().min(3).max(100).email(), // Email should be between 3-100 characters and in a valid email format
        password: zod.string().min(5).max(100).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/), // Password must include upper/lower case, numbers, and special characters
        name: zod.string().min(3).max(100), // Name must be between 3-100 characters
    });

    // Parse and validate the request body data
    const parseDataWithSuccess = requireBody.safeParse(req.body);

    // If validation fails, send error response with details
    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }

    // Get email, password, and name from the request body 
    const { email, password, name } = req.body;

    // Hash the user's password using bcrypt with a salt of 5
    const hashedPassword = await bcrypt.hash(password, 5);

    // Try to create a new user in the database
    try {
        await UserModel.create({ email, password: hashedPassword, name });
    } catch (error) {
        // If user already exists, return an error message
        return res.json({ message: "User already exists!" });
    }

    // Respond with a success message if the user is created successfully
    res.json({ message: "You are signed up!" });
});

// Signin route for authenticating a user
app.post("/signin", async function (req, res) {
    // Get email and password from the request body
    const { email, password } = req.body;

    // Find the user in the database by email
    const user = await UserModel.findOne({ email });

    // If user does not exist, send an invalid credentials message
    if (!user) {
        return res.status(403).json({ message: "Invalid Credentials!" });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If password matches, generate a JWT token and return it
    if (passwordMatch) {
        // Create a JWT token with the user's id and the secret key
        const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET);

        // Send the token and a success message
        res.json({ token, message: "You are signed in!" });
    } else {
        // If password doesn't match, send an invalid credentials message
        res.status(403).json({ message: "Invalid Credentials!" });
    }
});

// Route for creating a new todo item (requires authentication)
app.post("/todo", auth, async function (req, res) {
    // Get the userId from the authenticated request 
    const userId = req.userId;

    // Get title, done status, and deadline from the request body
    const { title, done, deadline } = req.body;

    // Create a new todo for the user and save it in the database
    await TodoModel.create({
        userId,
        title,
        done: done || false, // Default value for done is false
        deadline,
    });

    // Send success message after todo is created
    res.json({ message: "Todo created" });
});

// Route for retrieving all todos for a user (requires authentication)
app.get("/todo", auth, async function (req, res) {
    // Get the userId from the authenticated request
    const userId = req.userId;

    // Find all todos for the user by their userId
    const todos = await TodoModel.find({ userId });

    // If no todos are found, return a message to the client
    if (!todos) {
        return res.json({ message: "No todos found" });
    }

    // Send the retrieved todos as a response
    res.json({ todos });
});

// Route for updating a todo's title and/or done status (requires authentication)
app.put("/todo/:id", auth, async function (req, res) {
    // Get the userId from the authenticated request
    const userId = req.userId;

    // Get the todo's id from the request parameters
    const todoId = req.params.id;

    // Get the updated title and done status from the request body
    const { title, done } = req.body;

    // Find the todo by its id and the user's userId
    const todo = await TodoModel.findOne({ _id: todoId, userId });

    // If the todo doesn't exist, return a 404 error
    if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
    }

    // Update the todo's title and/or done status (only if provided)
    todo.title = title || todo.title;
    todo.done = (done !== undefined) ? done : todo.done;

    // Save the updated todo in the database
    await todo.save();

    // Send a success message after updating the todo
    res.json({ message: "Todo updated" });
});

// Route for deleting a todo (requires authentication)
app.delete("/todo/:id", auth, async function (req, res) {
    // Get the userId from the authenticated request
    const userId = req.userId;

    // Get the todo's id from the request parameters
    const todoId = req.params.id;

    // Find the todo by its id and the user's userId
    const todo = await TodoModel.findOne({ _id: todoId, userId });

    // If the todo doesn't exist, return a 404 error
    if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
    }

    // Delete the todo from the database
    await TodoModel.deleteOne({ _id: todoId, userId });

    // Send a success message after deletion
    res.json({ message: "Todo deleted" });
});

// Start the server and listen for requests on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

