const { userModel } = require("../models/userModel"); // Ensure this path is correct
const { purchaseModel } = require("../models/purchaseModel"); // Ensure this path is correct
const { courseModel } = require("../models/courseModel"); // Ensure this path is correct
const bcrypt = require("bcrypt");
const zod = require("zod");

// User Signup
async function userSignup(req, res) {
    const schema = zod.object({
        email: zod.string().email().min(5),
        password: zod.string().min(5),
        firstName: zod.string().min(3),
        lastName: zod.string().min(3),
    });

    const result = schema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            message: "Incorrect data format",
            error: result.error,
        });
    }

    const { email, password, firstName, lastName } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await userModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName,
        });
        res.status(201).json({
            message: "Signup Successful!",
        });
    } catch (error) {
        if (error.code === 11000) { // MongoDB duplicate key error
            return res.status(400).json({
                message: "User already exists",
            });
        }
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
}

// User Signin
async function userSignin(req, res) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(6),
    });

    const result = schema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            message: "Incorrect data format",
            error: result.error,
        });
    }

    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(403).json({
            message: "Incorrect Credentials!",
        });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
        req.session.userId = user._id; // Store userId in session
        
        res.status(200).json({
            message: "Signin Successful!",
        });
    } else {
        res.status(403).json({
            message: "Invalid Credentials!",
        });
    }
}

// User Signout
function userSignout(req, res) {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({
                message: "Failed to sign out",
            });
        }
        res.status(200).json({
            message: "Signout Successful!",
        });
    });
}

// Get User Purchases
async function getUserPurchases(req, res) {
    const userId = req.session.userId; // Use session userId
    
    if (!userId) {
        return res.status(401).json({
            message: "Unauthorized access",
        });
    }

    const purchases = await purchaseModel.find({ userId });

    if (!purchases.length) {
        return res.status(404).json({
            message: "No purchases found",
        });
    }

    const purchasesCourseIds = purchases.map(purchase => purchase.courseId);
    const coursesData = await courseModel.find({ _id: { $in: purchasesCourseIds } });

    res.status(200).json({
        purchases,
        coursesData,
    });
}

module.exports = {
    userSignup,
    userSignin,
    userSignout,
    getUserPurchases,
};
