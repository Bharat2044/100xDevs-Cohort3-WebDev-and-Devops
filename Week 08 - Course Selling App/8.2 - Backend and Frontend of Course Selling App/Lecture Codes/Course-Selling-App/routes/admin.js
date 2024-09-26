// Import express module
// let express = require('express');
// Create a new Router instance for admin routes
// let router = express.Router();

// Import Router from express module
const { Router } = require("express");

// Create a new Router instance for admin routes
const adminRouter = Router();

// Import adminModel and courseModel from the db folder
const { adminModel, courseModel } = require("../db");

// Import the adminMiddleware from the middleware folder
const { adminMiddleware } = require("../middleware/admin");

// Import the JWT Admin Secret from the config file
const { JWT_ADMIN_PASSWORD } = require("../config");

// Import jwt, bcrypt and zod modules
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const zod = require("zod");

// Define the admin routes for signup
adminRouter.post("/signup", async function (req, res) {
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

    // Hash the admin's password using bcrypt with a salt of 10
    const hashedPassword = await bcrypt.hash(password, 10);

    // Try to create a new admin in the database
    try {
        // Create a new admin with the given email, hashed password, firstName, and lastName
        await adminModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName,
        });
    } catch (error) {
        // If the admin already exists, return an error message
        return res.status(400).json({
            message: "Signup Failed!",
        });
    }

    // Respond with a success message if the admin is created successfully
    res.status(201).json({
        message: "Signup successful!",
    });
});

// Define the admin routes for signin
adminRouter.post("/signin", async function (req, res) {
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

    // Find the admin with the given email
    const admin = await adminModel.findOne({
        email: email,
    });

    // If the admin is not found, send an error message to the client
    if (!admin) {
        return res.status(403).json({
            message: "Invalid Credentials!",
        });
    }

    // Compare the password with the hashed password using the bcrypt.compare() method
    const passwordMatch = bcrypt.compare(password, admin.password);

    // If password matches, generate a JWT token and return it
    if (passwordMatch) {
        // Create a JWT token with the admin's id and the secret key
        const token = jwt.sign({ id: admin._id }, JWT_ADMIN_PASSWORD);

        // Send the token to the client
        res.status(200).json({
            token: token,
        });
    } else {
        // If the admin is not found, send an error message to the client
        res.status(403).json({
            message: "Invalid Credentials!",
        });
    }
});

// Define the admin routes for creating a course
adminRouter.post("/course", adminMiddleware, async function (req, res) {
    // Get the adminId from the request object
    const adminId = req.adminId;

    // Validate the request body data using zod schema (title, description, imageUrl, price must be valid)
    const requireBody = zod.object({
        title: zod.string().min(3),
        description: zod.string().min(10),
        imageUrl: zod.string().url(),
        price: zod.number().positive(),
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

    // Get title, description, imageUrl, and price from the request body
    const { title, description, imageUrl, price } = req.body;

    // Create a new course with the given title, description, imageUrl, price, and creatorId
    const course = await courseModel.create({
        title,
        description,
        imageUrl,
        price,
        creatorId: adminId,
    });

    // Respond with a success message if the course is created successfully
    res.status(201).json({
        message: "Course created!",
        courseId: course._id,
    });
});

// Define the admin routes for updating a course
adminRouter.put("/course", adminMiddleware, async function (req, res) {
    // Get the adminId from the request object
    const adminId = req.adminId;

    // Validate the request body data using zod schema (title, description, imageUrl, price, courseId must be valid)
    const requireBody = zod.object({
        title: zod.string().min(3),
        description: zod.string().min(5),
        imageUrl: zod.string().url().min(5),
        price: zod.number().positive(),
        courseId: zod.string().min(5),
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

    // Get title, description, imageUrl, price, and courseId from the request body
    const { title, description, imageUrl, price, courseId } = req.body;

    // Find the course with the given courseId and creatorId
    const course = await courseModel.find({
        _id: courseId,
        creatorId: adminId,
    });

    // If the course is not found, send an error message to the client
    if (!course) {
        return res.status(404).json({
            message: "Course not found!",
        });
    }

    // Update the course with the given courseId and creatorId
    const updatedCourse = await courseModel.updateOne({
            _id: courseId,
            creatorId: adminId,
        }, {
            title,
            description,
            imageUrl,
            price,
        }
    );

    // If the course is not found, send an error message to the client
    res.status(200).json({
        message: "Course updated!",
        courseId: updatedCourse._id,
    });
});

// Define the admin routes for getting all courses
adminRouter.get("/course/bulk", adminMiddleware, async function (req, res) {
    // Get the adminId from the request object
    const adminId = req.adminId;

    // Find all courses with the given creatorId
    const courses = await courseModel.find({
        creatorId: adminId,
    });

    // Respond with the courses if they are found successfully
    res.status(200).json({
        courses: courses,
    });
});

// Export the adminRouter so that it can be used in other files
module.exports = {
    adminRouter: adminRouter,
};
