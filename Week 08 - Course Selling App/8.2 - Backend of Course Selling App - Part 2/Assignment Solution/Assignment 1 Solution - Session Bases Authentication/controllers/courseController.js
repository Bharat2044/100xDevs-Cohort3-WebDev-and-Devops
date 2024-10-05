const { purchaseModel } = require("../models/purchaseModel");
const { courseModel } = require("../models/courseModel");

// Purchase a course
async function purchaseCourse(req, res) {
    const userId = req.session.userId;
    const courseId = req.body.courseId;

    if (!courseId) {
        return res.status(400).json({
            message: "Please provide a courseId",
        });
    }

    try {
        // Check if the user has already purchased the course
        const existingPurchase = await purchaseModel.findOne({
            courseId: courseId,
            userId: userId,
        });

        if (existingPurchase) {
            return res.status(400).json({
                message: "You have already bought this course",
            });
        }

        // Create a new purchase entry
        await purchaseModel.create({
            courseId: courseId,
            userId: userId,
        });

        res.status(201).json({
            message: "You have successfully bought the course",
        });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while processing the purchase",
            error: error.message,
        });
    }
}

// Preview courses
async function previewCourses(req, res) {
    try {
        const courses = await courseModel.find({});
        res.status(200).json({
            courses: courses,
        });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while fetching courses",
            error: error.message,
        });
    }
}

module.exports = {
    purchaseCourse,
    previewCourses,
};
