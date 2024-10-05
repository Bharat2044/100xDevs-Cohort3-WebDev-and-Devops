const { Router } = require("express");
const { adminMiddleware } = require("../middleware/adminMiddleware");
const adminController = require("../controllers/adminController");

// Create a new instance of Router
const adminRouter = Router();

// Admin Signup Route
adminRouter.post("/signup", adminController.adminSignup);

// Admin Signin Route
adminRouter.post("/signin", adminController.adminSignin);

// Create Course Route
adminRouter.post("/course", adminMiddleware, adminController.createCourse);

// Update Course Route
adminRouter.put("/course", adminMiddleware, adminController.updateCourse);

// Delete Course Route
adminRouter.delete("/course", adminMiddleware, adminController.deleteCourse);

// Get All Courses Route
adminRouter.get("/course/bulk", adminMiddleware, adminController.getAllCourses);

module.exports = {
    adminRouter,
};
