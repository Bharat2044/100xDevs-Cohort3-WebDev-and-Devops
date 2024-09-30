// Import express module for creating an instance of express router
const express = require("express");  

// Import User and Course models from the database module
const { User, Course } = require("../db");  

// Import the user authentication middleware
const userMiddleware = require("../middleware/user");  

// Create an instance of express router
const router = express.Router();  

// Route for user signup
router.post("/signup", async (req, res) => {
    // Extract username and password from the request body
    const username = req.body.username;
    const password = req.body.password;

    // Check if a user with the same username already exists
    const existingUser = await User.findOne({ username });

    // If user already exists, respond with a 400 status code
    if (existingUser) {
        return res.status(400).json({
            message: "User already exists",
        });
    }

    // Create a new user in the database
    await User.create({ username, password });

    // Respond with a success message and 201 status code
    res.status(201).json({
        message: "User created successfully",
    });
});

// Route for listing all available courses
router.get("/courses", async (req, res) => {
    // Find all courses in the database
    const courses = await Course.find({});

    // Respond with the list of courses and a 200 status code
    res.status(200).json({ courses });
});

// Route for purchasing a course (user-protected)
router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    // Extract the course ID from the request parameters and username from headers
    const courseId = req.params.courseId;
    const username = req.headers.username;

    try {
        // Update the user's purchasedCourses array by adding the course ID
        await User.updateOne(
            { username }, 
            { "$push": { purchasedCourses: courseId } }
        );
    } catch (err) {
        // If there is an error during the update, respond with a 400 status code
        return res.status(400).json({
            message: "Course purchase failed",
            error: err.message,
        });
    }

    // Respond with a success message and a 200 status code
    res.status(200).json({
        message: "Course purchased successfully",
    });
});

// Route for fetching purchased courses (user-protected)
router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    // Find the user by username extracted from headers
    const user = await User.findOne({ username: req.headers.username });

    // Find the courses that match the user's purchasedCourses array
    const courses = await Course.find({
        _id: { "$in": user.purchasedCourses }
    });

    // Respond with the list of purchased courses and a 200 status code
    res.status(200).json({ courses });
});

// Export the router to use in other parts of the application
module.exports = router; 
