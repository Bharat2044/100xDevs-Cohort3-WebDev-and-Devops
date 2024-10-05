const { Router } = require("express");
const { userMiddleware } = require("../middleware/userMiddleware");
const courseController = require("../controllers/courseController");

const {userSessionMiddleware} = require("../middleware/userSessionMiddleware");

// Create a new Router instance for course routes
const courseRouter = Router();

// Route to purchase a course with user authentication
courseRouter.post("/purchase", userSessionMiddleware, userMiddleware, courseController.purchaseCourse);

// Route to preview available courses without authentication
courseRouter.get("/preview", courseController.previewCourses);

// Export the courseRouter for use in other parts of the application
module.exports = {
    courseRouter,
};
