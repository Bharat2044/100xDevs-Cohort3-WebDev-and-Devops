// Import the express module to create the application
const express = require('express');

// Import body-parser middleware to parse incoming request bodies
const bodyParser = require('body-parser');

// Initialize an Express application instance
const app = express();

// Import the admin routes from the admin router module
const adminRouter = require("./routes/admin");

// Import the user routes from the user router module
const userRouter = require("./routes/user");

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Use the admin router for routes starting with '/admin'
app.use("/admin", adminRouter);

// Use the user router for routes starting with '/user'
app.use("/user", userRouter);

// Define the port on which the server will listen for incoming requests
const PORT = 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    // Log a message to the console when the server is running
    console.log(`Server is running on port ${PORT}`);
});
