const { adminModel } = require("../models/adminModel");
const { courseModel } = require("../models/courseModel");
const bcrypt = require("bcrypt");
const zod = require("zod");

// Admin Signup
async function adminSignup(req, res) {
    const schema = zod.object({
        email: zod.string().email().min(5),
        password: zod.string().min(5),
        firstName: zod.string().min(3),
        lastName: zod.string().min(3),
    });

    const result = schema.safeParse(req.body);

    if (!result.success) {
        return res.json({ message: "Incorrect data format", error: result.error });
    }

    const { email, password, firstName, lastName } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await adminModel.create({ email, password: hashedPassword, firstName, lastName });
        res.status(201).json({ message: "Signup successful!" });
    } catch (error) {
        return res.status(400).json({ message: "Admin already exists!" });
    }
}

// Admin Signin
async function adminSignin(req, res) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(6),
    });

    const result = schema.safeParse(req.body);

    if (!result.success) {
        return res.json({ message: "Incorrect data format", error: result.error });
    }

    const { email, password } = req.body;
    // Find the admin with the given email
    const admin = await adminModel.findOne({ email });

    if (!admin) {
        return res.status(403).json({ message: "Invalid Credentials!" });
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (passwordMatch) {
        req.session.adminId = admin._id;
        res.status(200).json({ message: "Signin successful!" });
    } else {
        res.status(403).json({ message: "Invalid Credentials!" });
    }
}

// Create Course
async function createCourse(req, res) {
    const schema = zod.object({
        title: zod.string().min(3),
        description: zod.string().min(10),
        imageUrl: zod.string().url(),
        price: zod.number().positive(),
    });

    const result = schema.safeParse(req.body);

    if (!result.success) {
        return res.json({ message: "Incorrect data format", error: result.error });
    }

    const { title, description, imageUrl, price } = req.body;
    const course = await courseModel.create({ title, description, imageUrl, price, creatorId: req.adminId });

    res.status(201).json({ message: "Course created!", courseId: course._id });
}

// Update Course
async function updateCourse(req, res) {
    const schema = zod.object({
        courseId: zod.string().min(5),
        title: zod.string().min(3).optional(),
        description: zod.string().min(5).optional(),
        imageUrl: zod.string().url().optional(),
        price: zod.number().positive().optional(),
    });

    const result = schema.safeParse(req.body);

    if (!result.success) {
        return res.json({ message: "Incorrect data format", error: result.error });
    }

    const { courseId, title, description, imageUrl, price } = req.body;
    const course = await courseModel.findOne({ _id: courseId, creatorId: req.adminId });

    if (!course) {
        return res.status(404).json({ message: "Course not found!" });
    }

    await courseModel.updateOne(
        { _id: courseId, creatorId: req.adminId },
        {
            title: title || course.title,
            description: description || course.description,
            imageUrl: imageUrl || course.imageUrl,
            price: price || course.price,
        }
    );

    res.status(200).json({ message: "Course updated!" });
}

// Delete Course
async function deleteCourse(req, res) {
    const schema = zod.object({
        courseId: zod.string().min(5),
    });

    const result = schema.safeParse(req.body);

    if (!result.success) {
        return res.json({ message: "Incorrect data format", error: result.error });
    }

    const { courseId } = req.body;
    const course = await courseModel.findOne({ _id: courseId, creatorId: req.adminId });

    if (!course) {
        return res.status(404).json({ message: "Course not found!" });
    }

    await courseModel.deleteOne({ _id: courseId, creatorId: req.adminId });
    res.status(200).json({ message: "Course deleted!" });
}

// Get All Courses
async function getAllCourses(req, res) {
    const courses = await courseModel.find({ creatorId: req.adminId });
    res.status(200).json({ courses });
}

module.exports = {
    adminSignup,
    adminSignin,
    createCourse,
    updateCourse,
    deleteCourse,
    getAllCourses,
};
