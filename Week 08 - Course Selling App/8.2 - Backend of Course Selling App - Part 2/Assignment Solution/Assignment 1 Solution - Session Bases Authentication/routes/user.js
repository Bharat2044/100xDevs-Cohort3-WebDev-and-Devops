const { Router } = require("express");
const { userMiddleware } = require("../middleware/userMiddleware");
const userController = require("../controllers/userController");

const userRouter = Router();

// User Signup Route
userRouter.post("/signup", userController.userSignup);

// User Signin Route
userRouter.post("/signin", userController.userSignin);

// User Signout Route
userRouter.post("/signout", userController.userSignout);

// Get User Purchases Route
userRouter.get("/purchases", userMiddleware, userController.getUserPurchases);

module.exports = {
    userRouter,
};
