// Import express module
const express = require("express");  

// Import the admin authentication middleware
const adminMiddleware = require("../middleware/admin");  

// Import Admin and Course models from the database module
const { Admin, Course } = require("../db");  

// Create an instance of express router
const router = express.Router();  

// Route for admin signup
router.post("/signup", async (req, res) => {
    // Extract username and password from request body
    const username = req.body.username;
    const password = req.body.password;

    // Check if an admin with the same username already exists
    const existingAdmin = await Admin.findOne({ username });

    // If admin already exists, return a 400 error
    if (existingAdmin) {
        return res.status(400).json({
            message: "Admin already exists",
        });
    }

    // Create a new admin in the database
    await Admin.create({ username, password });

    // Respond with a success message and 201 status code
    res.status(201).json({
        message: "Admin created successfully",
    });
});

// Route for creating a new course (admin-protected)
router.post("/courses", adminMiddleware, async (req, res) => {
    // Extract course details from request body
    const { title, description, imageLink, price } = req.body;

    // Create a new course in the database
    const newCourse = await Course.create({ title, description, imageLink, price });

    // Respond with the newly created course ID and success message
    res.status(201).json({
        message: "Course created successfully",
        courseId: newCourse._id,
    });
});

// Route for fetching all courses (admin-protected)
router.get("/courses", adminMiddleware, (req, res) => {
    // Find all courses in the database
    Course.find({})
        .then(function (response) {
            // Respond with the list of all courses and 200 status code
            res.status(200).json({
                courses: response,
            });
        })
        .catch((err) => {
            // Handle any database errors and respond with a 500 status code
            res.status(500).json({
                message: "Error while fetching courses",
            });
        });
});

// Export the router to use in other parts of the application
module.exports = router;  
