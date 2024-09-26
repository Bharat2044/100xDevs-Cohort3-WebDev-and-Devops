// Import express module
// let express = require('express');
// Create a new Router instance for user routes
// let router = express.Router();


// Import the Router object from the express module to create route handlers
const { Router } = require("express");

// Create a new instance of Router for defining user-related routes
const userRouter = Router();

// Import userModel, purchaseModel, and courseModel from the database folder to interact with user, purchase, and course data
const { userModel, purchaseModel, courseModel } = require("../db");

// Import userMiddleware to authenticate and authorize users before allowing access to routes
const { userMiddleware } = require("../middleware/user");

// Import the JWT User Secret from the configuration file for signing JWT tokens
const { JWT_USER_PASSWORD } = require("../config");

// Import necessary modules for handling JWT, password hashing, and schema validation
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const zod = require("zod");

// Define a POST route for user signup
userRouter.post("/signup", async function (req, res) {
    // Define the schema for validating the request body data using zod
    const requireBody = zod.object({
        email: zod.string().email().min(5), // Email must be a valid email format with minimum 5 characters
        password: zod.string().min(5), // Password must be at least 5 characters long
        firstName: zod.string().min(3), // First name must be at least 3 characters long
        lastName: zod.string().min(3), // Last name must be at least 3 characters long
    });

    // Parse and validate the incoming request body data
    const parseDataWithSuccess = requireBody.safeParse(req.body);

    // If validation fails, return a 400 error with the validation error details
    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error, // Provide details about the validation error
        });
    }

    // Extract validated email, password, firstName, and lastName from the request body
    const { email, password, firstName, lastName } = req.body;

    // Hash the user's password using bcrypt with a salt rounds of 10
    const hashedPassword = await bcrypt.hash(password, 10);

    // Try to create a new user in the database
    try {
        // Create a new user entry with the provided email, hashed password, firstName, and lastName
        await userModel.create({
            email,
            password: hashedPassword, // Store the hashed password instead of plain text
            firstName,
            lastName,
        });
    } catch (error) {
        // If there is an error during user creation, return a 400 error message
        return res.status(400).json({
            message: "You are already signup", // Provide a message indicating signup failure
        });
    }

    // Send a 201 success response back to the client indicating successful signup
    res.status(201).json({
        message: "Signup Successful!", // Success message upon successful signup
    });
});

// Define a POST route for user signin
userRouter.post("/signin", async function (req, res) {
    // Define the schema for validating the request body data using zod
    const requireBody = zod.object({
        email: zod.string().email(), // Email must be a valid email format
        password: zod.string().min(6), // Password must be at least 6 characters long
    });

    // Parse and validate the incoming request body data
    const parseDataWithSuccess = requireBody.safeParse(req.body);

    // If validation fails, return a 400 error with the validation error details
    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error, // Provide details about the validation error
        });
    }

    // Extract validated email and password from the request body
    const { email, password } = req.body;

    // Attempt to find the user with the provided email in the database
    const user = await userModel.findOne({
        email: email, // Querying the user by email
    });

    // If the user is not found, return a 403 error indicating incorrect credentials
    if (!user) {
        return res.status(403).json({
            message: "Incorrect Credentials!", // Error message for invalid login attempt
        });
    }

    // Compare the provided password with the stored hashed password using bcrypt
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If the password matches, create a JWT token and send it to the client
    if (passwordMatch) {
        // Create a JWT token containing the user ID, signed with the user JWT secret
        const token = jwt.sign({ id: user._id }, JWT_USER_PASSWORD);

        // Send the generated token back to the client
        res.status(200).json({
            token: token, // Include the token in the response
        });
    } else {
        // If the password does not match, return a 403 error indicating invalid credentials
        res.status(403).json({
            message: "Invalid Credentials!", // Error message for failed password comparison
        });
    }
});

// Define a GET route for fetching purchases made by the authenticated user
userRouter.get("/purchases", userMiddleware, async function (req, res) {
    // Get the userId from the request object set by the userMiddleware
    const userId = req.userId;

    // Find all purchase records associated with the authenticated userId
    const purchases = await purchaseModel.find({
        userId: userId, // Querying purchases by user ID
    });

    // If no purchases are found, return a 404 error response to the client
    if (!purchases) {
        return res.status(404).json({
            message: "No purchases found", // Error message for no purchases found
        });
    }

    // If purchases are found, extract the courseIds from the found purchases
    const purchasesCourseIds = purchases.map((purchase) => purchase.courseId);

    // Find all course details associated with the courseIds
    const coursesData = await courseModel.find({
        _id: { $in: purchasesCourseIds }, // Querying courses using the extracted course IDs
    });

    // Send the purchases and corresponding course details back to the client
    res.status(200).json({
        purchases, // Include purchase data in the response
        coursesData, // Include course details in the response
    });
});

// Export the userRouter so it can be imported and used in other parts of the application
module.exports = {
    userRouter: userRouter, // Export the router object for use in other modules
};
