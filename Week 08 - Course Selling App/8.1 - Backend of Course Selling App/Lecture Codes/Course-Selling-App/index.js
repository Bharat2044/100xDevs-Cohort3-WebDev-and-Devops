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
*/

// Import express, and mongoose modules
const express = require("express");
const mongoose = require("mongoose");

// Import the userRouter, courseRouter, adminRouter from the routes folder
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

// Initialize express app
const app = express();

// use the routes in the app object
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

/*
// create user routes and course routes using the functions
createUserRoutes();
createCourseRoutes();
*/

// Create a main function to connect to the database and start the server
async function main() {
    // Error handling using try-catch if any error occurs while connecting to database
    try {
        // Use the connect method to connect to the database and log a success message if the connection is successful
        const connection = await mongoose.connect("mongodb+srv://100xdevs:WvaTca0509mb90YX@cluster0.ossjd.mongodb.net/coursera-app");
        console.log("Connected to the database");
    } catch(error) {
         console.log("Failed to connect to the database", error)
    }

    /*
    // Use the connect method to connect to the database and log a success message if the connection is successful
    const connection = await mongoose.connect("mongodb+srv://100xdevs:WvaTca0509mb90YX@cluster0.ossjd.mongodb.net/coursera-app");

    // Check if the connection is successful or not
    if (connection) { // If the connection is successful
        console.log("Connected to the database");
    } else { // If the connection is not successful
        console.log("Failed to connect to the database");
    }
    */
    
    // Start the server on port 3000
    app.listen(3000, () => {
        console.log("Server is listening on port 3000");
    });
}

// Call the main function
main();
