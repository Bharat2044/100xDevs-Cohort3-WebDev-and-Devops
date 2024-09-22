/**
Create a course selling app
    - Initialize a new Node.js project
    - Add Express, jsonwebtoken, mongoose to it as a dependency
    - Create index.js
    - Add route skeleton for user login, signup, purchase a course, sees all course, see the purchased course
    - Add routes for admin login, admin signup, create a course, delete a course, add course content.
    - Add middlewares for user and admin auth
    - Add a database (mongodb), use dotenv to store the database connection string
    - Define the schema for User, Admin, Course, Purchase
    - Complete the routes for user login, signup, purchase a course, see course

Assignment #1 - Create a .env file and add the PORT and MongoDB URL. Access these values in the index.js file.
*/


// Import required modules
const express = require("express");  // Express for creating the server and handling routes
const mongoose = require("mongoose"); // Mongoose for connecting to MongoDB and handling schemas
require("dotenv").config(); // dotenv to load environment variables from a .env file

// Import routers for handling different routes
const { userRouter } = require("./routes/user");  // Handles user-related operations like signup, login, etc.
const { courseRouter } = require("./routes/course");  // Handles course-related operations like view, purchase, etc.
const { adminRouter } = require("./routes/admin");  // Handles admin-related operations like course creation, deletion, etc.

// Initialize the Express application
const app = express();

// Use the routes with a base API path
app.use("/api/v1/user", userRouter);  // All user-related routes will be prefixed with /api/v1/user
app.use("/api/v1/admin", adminRouter);  // All admin-related routes will be prefixed with /api/v1/admin
app.use("/api/v1/course", courseRouter);  // All course-related routes will be prefixed with /api/v1/course


/*
// create user routes and course routes using the functions
createUserRoutes();
createCourseRoutes();
*/

/**
 * Main function to establish a connection to the database and start the server.
 * This function is async to handle the asynchronous nature of database connections.
 */
async function main() {
    try {
        // Attempt to connect to the MongoDB database using the connection string from the .env file
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to the database successfully");

        // Get the port from the .env file or use the default port 3000
        const port = process.env.PORT || 3000;  
        
        // Listen on the specified port
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        // Log any errors that occur during the connection or server setup
        console.error("Failed to connect to the database or start the server", error);
    }
}

// Call the main function to start the app
main();