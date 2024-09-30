// Import the express module for routing
const express = require("express");

// Import necessary modules for handling JWT, password hashing, and schema validation
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const zod = require("zod");

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

    // try-catch block to handle errors that may occur during the signup process
    try {
        // Check if an admin already exists with the provided username
        const existingAdmin = await Admin.findOne({ username });

        // If an admin already exists, respond with a 400 Bad Request error
        if (existingAdmin) {
            return res.status(400).json({
                message: "Admin already exists", // Inform the client that the admin already exists
            });
        }

        // Hash the password for security before storing it in the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new admin in the database
        await Admin.create({
            username,
            password: hashedPassword, // Store the hashed password in the database
        });

        // Respond with a success message and a 201 Created status code
        res.status(201).json({
            message: "Admin created successfully", // Confirm successful creation
        });
    } catch (error) {
        // If an error occurs during the signup process, respond with a detailed error message
        return res.status(500).json({
            message: "Failed to create admin account. Please try again.", // Inform the client of the specific error
            error: error.message, // Include the error message for debugging purposes
        });
    }
});

// Route for admin signin
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

    try {
        // Find the admin with the provided username
        const admin = await Admin.findOne({
            username,
        });

        // If the admin is not found, respond with a 404 Not Found error
        if (!admin) {
            return res.status(404).json({
                message: "Admin not found", // Inform the client that the admin does not exist
            });
        }

        // Compare the provided password with the hashed password stored in the database
        const isPasswordValid = await bcrypt.compare(password, admin.password);

        // If the password is invalid, respond with a 401 Unauthorized error
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid password", // Inform the client that the password is incorrect
            });
        }

        // Generate a JWT token for the authenticated admin
        const token = jwt.sign(
            {
                username: admin.username,
            },
            JWT_SECRET
        );

        // Respond with the generated token and a success message
        res.json({
            token, // Return the generated JWT token
        });
    } catch (error) {
        // If an error occurs during the signin process, respond with a detailed error message
        return res.status(500).json({
            message: "Failed to sign in. Please try again.", // Inform the client of the specific error
            error: error.message, // Include the error message for debugging purposes
        });
    }
});

// Route for creating a new course (admin-protected)
router.post("/courses", adminMiddleware, async (req, res) => {
    const schema = zod.object({
        title: zod.string().min(3).max(50), // Title must be between 3 and 50 characters
        description: zod.string().min(10).max(500), // Description must be between 10 and 500 characters
        imageLink: zod.string().url(), // Image link must be a valid URL
        price: zod.number().int().positive(), // Price must be a positive integer
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

    // Get title, description, imageLink, and price from the request body
    const { title, description, imageLink, price } = req.body;

    try {
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
    } catch (error) {
        // If an error occurs during the course creation, respond with a detailed error message
        return res.status(500).json({
            message: "Failed to create course. Please check the details and try again.", // Inform the client of the specific error
            error: error.message, // Include the error message for debugging purposes
        });
    }
});

// Route for updating a course (admin-protected)
router.put("/courses", adminMiddleware, async (req, res) => {
    // Define a schema for validating the request body data
    const schema = zod.object({
        courseId: zod.string().min(5).max(24), // Course ID must be a 24-character string
        title: zod.string().min(3).max(50).optional(), // Title must be between 3 and 50 characters
        description: zod.string().min(10).max(500).optional(), // Description must be between 10 and 500 characters
        imageLink: zod.string().url().optional(), // Image link must be a valid URL
        price: zod.number().int().positive().optional(), // Price must be a positive integer
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

    // Destructure the validated fields from the request body
    const { courseId, title, description, imageLink, price } = req.body;

    try {
        // Find the course by ID
        const course = await Course.findById(courseId);

        // If the course is not found, respond with an error message
        if (!course) {
            return res.status(404).json({
                message: "Course not found!", // Inform the client that the specified course does not exist
            });
        }

        // Update the course details
        await Course.updateOne(
            { _id: courseId }, // Ensure the update is applied to the correct course
            {
                title: title || course.title, // Update the title if provided, otherwise keep the existing title
                description: description || course.description, // Update the description if provided, otherwise keep the existing description
                imageLink: imageLink || course.imageLink, // Update the image link if provided, otherwise keep the existing image link
                price: price || course.price, // Update the price if provided, otherwise keep the existing price
            }
        );

        // Respond with a success message and a 200 OK status code
        res.status(200).json({
            message: "Course updated successfully", // Confirm successful course update
        });
    } catch (error) {
        // If an error occurs during the course update, respond with a detailed error message
        return res.status(500).json({
            message: "Failed to update course. Please try again.", // Inform the client of the specific error
            error: error.message, // Include the error message for debugging purposes
        });
    }
});

// Route for deleting a course (admin-protected)
router.delete("/courses", adminMiddleware, async (req, res) => {
    // Extract the course ID from the request body
    const courseId = req.body.courseId;

    try {
        // Find the course by ID
        const course = await Course.findById(courseId);

        // If the course is not found, respond with an error message
        if (!course) {
            return res.status(404).json({
                message: "Course not found!", // Inform the client that the specified course does not exist
            });
        }

        // Delete the course from the database
        await Course.deleteOne({
            _id: courseId, // Delete the course with the specified ID
        });

        // Respond with a success message and a 200 OK status code
        res.status(200).json({
            message: "Course deleted successfully", // Confirm successful course deletion
        });
    } catch (error) {
        // If an error occurs during the course deletion, respond with a detailed error message
        return res.status(500).json({
            message: "Failed to delete course. Please try again.", // Inform the client of the specific error
            error: error.message, // Include the error message for debugging purposes
        });
    }
});

// Route for fetching all courses (admin-protected)
router.get("/courses", adminMiddleware, async (req, res) => {
    try {
        // Fetch all courses from the database
        const courses = await Course.find();

        // Respond with the fetched courses and a 200 OK status code
        res.json(courses);
    } catch (error) {
        // If an error occurs while fetching courses, respond with a detailed error message
        return res.status(500).json({
            message: "Failed to retrieve courses. Please try again.", // Inform the client of the specific error
            error: error.message, // Include the error message for debugging purposes
        });
    }
});

// Export the router for use in other parts of the application
module.exports = router;
