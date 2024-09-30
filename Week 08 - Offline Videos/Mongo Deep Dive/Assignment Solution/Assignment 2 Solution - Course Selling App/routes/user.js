// Import the express module for routing
const express = require("express");

// Import the jsonwebtoken library for JWT handling
const jwt = require("jsonwebtoken");

// Import bcrypt for password hashing
const bcrypt = require("bcrypt");

// Import necessary modules for schema validation
const zod = require("zod");

// Create an instance of the express router
const router = express.Router();

// Import User and Course models from the database module
const { User, Course } = require("../db");

// Import user authentication middleware
const userMiddleware = require("../middleware/user");

// Import the JWT secret from the config file
const { JWT_SECRET } = require("../config");

// User Routes

// Route for user signup
router.post("/signup", async (req, res) => {
    // Define a schema for validating the request body data
    const schema = zod.object({
        username: zod.string().min(3).max(20), // Username must be between 3 and 20 characters
        password: zod.string().min(6).max(20), // Password must be between 6 and 20 characters
    });

    // Parse and validate the request body data
    const parseDataWithSuccess = schema.safeParse(req.body);

    // If the data format is incorrect, send an error message to the client
    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }

    // Extract username and password from request body
    const username = req.body.username;
    const password = req.body.password;

    // Check if a user with the same username already exists
    const existingUser = await User.findOne({ username });

    // If user already exists, return a 400 Bad Request error
    if (existingUser) {
        return res.status(400).json({
            message: "User already exists", // Inform the client that the user is already registered
        });
    }

    // Hash the password for security before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    await User.create({
        username, // Store the username
        password: hashedPassword, // Store the hashed password
    });

    // Respond with a success message and a 201 Created status code
    res.status(201).json({
        message: "User created successfully", // Confirm successful creation
    });
});

// Route for user signin
router.post("/signin", async (req, res) => {
    // Define a schema for validating the request body data
    const schema = zod.object({
        username: zod.string().min(3).max(20), // Username must be between 3 and 20 characters
        password: zod.string().min(6).max(20), // Password must be between 6 and 20 characters
    });

    // Parse and validate the request body data
    const parseDataWithSuccess = schema.safeParse(req.body);

    // If the data format is incorrect, send an error message to the client
    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }

    // Extract username and password from request body for authentication
    const username = req.body.username;
    const password = req.body.password;

    // Check if user exists with provided username
    const user = await User.findOne({ username });

    // If user is found, compare the provided password with the hashed password
    if (user && (await bcrypt.compare(password, user.password))) {
        // Generate a JWT token for the authenticated user
        const token = jwt.sign(
            {
                username: user.username, // Create a token containing the username
            },
            JWT_SECRET // Use the secret to sign the token
        );

        // Respond with the generated token and a 200 OK status
        return res.status(200).json({
            token, // Return the JWT token for authentication
        });
    } else {
        // If credentials are incorrect, respond with a 400 Bad Request error
        return res.status(400).json({
            message: "Incorrect username or password", // Inform the client of authentication failure
        });
    }
});

// Route for listing all courses
router.get("/courses", async (req, res) => {
    // Fetch all courses from the database
    const courses = await Course.find({});

    // Respond with the list of courses and a 200 OK status code
    res.status(200).json({
        courses, // Return the array of courses
    });
});

// Route for purchasing a course (user-protected)
router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    // Extract course ID from request parameters and username from the request object
    const courseId = req.params.courseId;
    const username = req.username;

    try {
        // Update the user document to add the purchased course ID to the user's purchasedCourses array
        await User.updateOne(
            {
                username,
            },
            {
                $push: {
                    purchasedCourses: courseId, // Add course ID to purchasedCourses
                },
            }
        );

        // Respond with a success message and a 200 OK status
        res.status(200).json({
            message: "Course purchased successfully", // Confirm course purchase
        });
    } catch (err) {
        // If the update fails, respond with a 400 Bad Request error
        return res.status(400).json({
            message: "Course purchase failed", // Inform the client of purchase failure
            error: err.message, // Include error message for debugging
        });
    }
});

// Route for fetching purchased courses (user-protected)
router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    // Extract username from the request object
    const username = req.username;

    try {
        // Find the user document by username
        const user = await User.findOne({ username });

        // If user is not found, respond with a 404 Not Found error
        if (!user) {
            return res.status(404).json({
                message: "User not found", // Inform the client that the user does not exist
            });
        }

        // Fetch courses that the user has purchased
        const courses = await Course.find({
            _id: {
                $in: user.purchasedCourses, // Find courses whose IDs are in the user's purchasedCourses array
            },
        });

        // Respond with the list of purchased courses and a 200 OK status code
        res.status(200).json({
            courses, // Return the array of purchased courses
        });
    } catch (error) {
        // If an error occurs while fetching courses, respond with a detailed error message
        return res.status(500).json({
            message: "Failed to retrieve purchased courses. Please try again.", // Inform the client of the specific error
            error: error.message, // Include the error message for debugging purposes
        });
    }
});

// Export the router for use in other parts of the application
module.exports = router;
