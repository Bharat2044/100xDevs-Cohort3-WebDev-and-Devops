// Import express module 
// let express = require('express');
// Create a new Router instance for user routes
// let router = express.Router();


// Import Router from express module
const { Router } = require("express");

// Create a new Router instance for user routes
const userRouter = Router();

// Define the user routes for signup 
userRouter.post("/signup", function (req, res) {
    res.json({
        message: "Signup endpoint!",
    });
});

// Define the user routes for signin 
userRouter.post("/signin", function (req, res) {
    res.json({
        message: "Signin endpoint!",
    });
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


/*
function createUserRoutes() {
    app.post("/user/signup", function (req, res) {
        res.json({
            message: "Signup endpoint!",
        });
    });

    app.post("/user/signin", function (req, res) {
        res.json({
            message: "Signin endpoint!",
        });
    });

    app.get("/user/purchases", function (req, res) {
        res.json({
            message: "Purchases endpoint!",
        });
    });
}

module.exports = {
    createUserRoutes: createUserRoutes,
};
*/
