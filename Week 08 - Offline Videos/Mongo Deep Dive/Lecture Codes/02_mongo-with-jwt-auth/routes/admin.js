// Import the express module for routing
const express = require("express"); 

// Import the jsonwebtoken library for JWT handling
const jwt = require("jsonwebtoken"); 

// Create an instance of the express router
const router = express.Router(); 

// Import admin authentication middleware
const adminMiddleware = require("../middleware/admin"); 

// Import Admin and Course models from the database module
const { Admin, Course } = require("../db"); 

// Import the JWT secret from the config file
const { JWT_SECRET } = require("../config"); 

// Route for admin signup
router.post("/signup", async (req, res) => {
    // Extract username and password from request body
    const username = req.body.username;
    const password = req.body.password;

    // Check if an admin with the same username already exists
    const existingAdmin = await Admin.findOne({
        username: username, // Search for admin by username
    });

    // If admin already exists, return a 400 Bad Request error
    if (existingAdmin) {
        return res.status(400).json({
            message: "Admin already exists", // Inform the client that the admin is already registered
        });
    }

    // Create a new admin in the database
    await Admin.create({
        username: username, // Store the username
        password: password, // Store the password (consider hashing for security)
    });

    // Respond with a success message and a 201 Created status code
    res.status(201).json({
        message: "Admin created successfully", // Confirm successful creation
    });
});

// Route for admin signin
router.post("/signin", async (req, res) => {
    // Extract username and password from request body for authentication
    const username = req.body.username;
    const password = req.body.password;

    // Check if admin exists with provided username and password
    const user = await Admin.findOne({
        username,
        password // (Consider implementing password hashing for security)
    });

    // If user is found, generate a JWT token
    if (user) {
        const token = jwt.sign({ 
            username // Create a token containing the username
        }, JWT_SECRET);
        
        // Respond with the generated token and a 200 OK status
        return res.status(200).json({
            token: token, // Return the JWT token for authentication
        });
    } else {
        // If credentials are incorrect, respond with a 400 Bad Request error
        return res.status(400).json({
            message: "Incorrect username and password", // Inform the client of authentication failure
        });
    }
});

// Route for creating a new course (admin-protected)
router.post("/courses", adminMiddleware, async (req, res) => {
    // Extract course details from request body
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    // Create a new course in the database
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price,
    });

    // Respond with the newly created course ID and a success message
    res.status(201).json({
        message: "Course created successfully", // Confirm course creation
        courseId: newCourse._id, // Return the ID of the newly created course
    });
});

// Route for fetching all courses (admin-protected)
router.get("/courses", adminMiddleware, async (req, res) => {
    // Fetch all courses from the database
    const response = await Course.find({});

    // Respond with the list of all courses and a 200 OK status code
    res.status(200).json({
        courses: response, // Return the array of courses
    });
});

// Export the router for use in other parts of the application
module.exports = router;  
