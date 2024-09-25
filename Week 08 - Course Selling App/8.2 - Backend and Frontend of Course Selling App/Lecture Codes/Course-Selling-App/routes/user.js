// Import express module
// let express = require('express');
// Create a new Router instance for user routes
// let router = express.Router();

// Import Router from express module
const { Router } = require("express");

// Create a new Router instance for user routes
const userRouter = Router();

// Import the userModel, purchaseModel, and courseModel from the db folder
const { userModel, purchaseModel, courseModel } = require("../db");

// Import the userMiddleware from the middleware folder
const { userMiddleware } = require("../middleware/user");

// Import the JWT User Secret from the config file
const { JWT_USER_PASSWORD } = require("../config");

// Import jwt, bcrypt and zod modules
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const zod = require("zod");

// Define the user routes for signup
userRouter.post("/signup", async function (req, res) {
    // Validate the request body data using zod schema (email, password, firstName, lastName must be valid)
    const requireBody = zod.object({
        email: zod.string().email().min(5),
        password: zod.string().min(5),
        firstName: zod.string().min(3),
        lastName: zod.string().min(3),
    });

    // Parse and validate the request body data
    const parseDataWithSuccess = requireBody.safeParse(req.body);

    // If the data format is incorrect, send an error message to the client
    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }

    // Get email, password, firstName, and lastName from the request body
    const { email, password, firstName, lastName } = req.body;

    // Hash the user's password using bcrypt with a salt of 10
    const hashedPassword = await bcrypt.hash(password, 10);

    // Try to create a new user in the database
    try {
        // Create a new user with the given email, hashed password, firstName, and lastName
        await userModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName,
        });
    } catch (error) {
        return res.status(400).json({
            message: "Signup Failed!",
        });
    }

    // Send a success message to the client
    res.status(201).json({
        message: "Signup Successful!",
    });
});

// Define the user routes for signin
userRouter.post("/signin", async function (req, res) {
    // Validate the request body data using zod schema (email, password must be valid)
    const requireBody = zod.object({
        email: zod.string().email(),
        password: zod.string().min(6),
    });

    // Parse and validate the request body data
    const parseDataWithSuccess = requireBody.safeParse(req.body);

    // If the data format is incorrect, send an error message to the client
    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }

    // Get email and password from the request body
    const { email, password } = req.body;

    // Find the user with the given email
    const user = await userModel.findOne({
        email: email,
    });

    // If the user is not found, send an error message to the client
    if (!user) {
        return res.status(403).json({
            message: "Incorrect Credentials!",
        });
    }

    // Compare the password with the hashed password using the bcrypt.compare() method
    const passwordMatch = bcrypt.compare(password, user.password);

    // If the user password matches, create a JWT token and send it to the client
    if (passwordMatch) {
        // Create a JWT token with the user id and the user JWT secret
        const token = jwt.sign({ id: user._id }, process.env.JWT_USER_PASSWORD);

        // Send the token to the client
        res.status(200).json({
            token: token,
        });
    } else {
        // If the user is not found, send an error message to the client
        res.status(403).json({
            message: "Invalid Credentials!",
        });
    }
});

// Define the user routes for purchases made by the user
userRouter.get("/purchases", function (req, res) {
    res.json({
        message: "Purchases endpoint!",
    });
});

// Export the userRouter so that it can be used in other files
module.exports = {
    userRouter: userRouter,
};
