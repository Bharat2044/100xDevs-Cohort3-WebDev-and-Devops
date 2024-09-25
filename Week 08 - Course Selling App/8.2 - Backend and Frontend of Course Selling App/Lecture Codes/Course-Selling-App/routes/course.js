// Import express module 
// let express = require('express');
// Create a new Router instance for course routes
// let router = express.Router();


// Import Router from express module
const { Router } = require("express");

// Create a new Router instance for course routes
const courseRouter = Router();

// Import the purchaseModel and courseModel from the db folder
const { purchaseModel, courseModel } = require("../db");

// Import the userMiddleware from the middleware folder
const { userMiddleware } = require("../middleware/user");

courseRouter.post("/purchase", userMiddleware, async function (req, res) {
    const userId = req.userId;

    const courseId = req.body.courseId;

    const purchase = await purchaseModel.create({
        courseId: courseId,
        userId: userId,
    });

    res.status(201).json({
        message: "You have successfully bought the course",
        purchase: purchase,
    });
});

// Define the course routes for previewing a course
courseRouter.get("/preview", userMiddleware, async function (req, res) {
    const courses = await courseModel.find({});

    res.json({
        courses
    })
});

// Export the courseRouter so that it can be used in other files
module.exports = {
    courseRouter: courseRouter,
};