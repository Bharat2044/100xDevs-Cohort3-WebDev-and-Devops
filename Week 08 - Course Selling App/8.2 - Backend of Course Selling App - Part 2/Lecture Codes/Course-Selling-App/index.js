// Import the dotenv module to load environment variables from the .env file
require("dotenv").config();

// Import express for building the web server and mongoose for MongoDB interaction
const express = require("express");
const mongoose = require("mongoose");

// Import the route handlers for user, course, and admin functionality from the routes folder
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

// Initialize the express application
const app = express();

// Middleware to automatically parse incoming JSON requests and make it available in req.body
app.use(express.json());

// Retrieve the PORT from the .env file, default to 3000 if it's not provided
const PORT = process.env.PORT || 3000;

// Retrieve the MongoDB connection string (MONGODB_URL) from the .env file
const MONGODB_URL = process.env.MONGODB_URL;

// Use the imported routers for handling specific routes
// All user-related requests will go to /api/v1/user
app.use("/api/v1/user", userRouter);

// All admin-related requests will go to /api/v1/admin
app.use("/api/v1/admin", adminRouter);

// All course-related requests will go to /api/v1/course
app.use("/api/v1/course", courseRouter);

// Main function to handle database connection and server start
async function main() {
    try {
        // Connect to the MongoDB database using the MONGODB_URL
        await mongoose.connect(MONGODB_URL);

        // Log a success message to the console if the database connection is established
        console.log("Connected to the database");

        // Start the server and listen for incoming requests on the specified PORT
        app.listen(PORT, () => {
            // Log a message to indicate that the server is running and listening for requests
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        // Log an error message if the connection to the database fails
        console.error("Failed to connect to the database", error);
    }
}

// Invoke the main function to initiate the server and database connection
main();
