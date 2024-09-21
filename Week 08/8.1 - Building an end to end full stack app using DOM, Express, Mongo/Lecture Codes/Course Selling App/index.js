/**
Create a course selling app
    - Initialize a new Node.js project
    - Add Express, jsonwebtoken, mongoose to it as a dependency
    - Create index.js
    - Add route skeleton for user login, signup, purchase a course, sees all course, see the purchased course
    - Add routes for admin login, admin signup, create a course, delete a course, add course content.
    - Add middlewares for user and admin auth
    - Add a database (mongodb), use dotenv to store the database connection string
    - Define the schema for User, Admin, Course, Purchase
    - Complete the routes for user login, signup, purchase a course, see course
*/

// Import express, jsonwebtoken, mongoose modules
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

// Initialize express app
const app = express();

app.post("/user/signup", function (req, res) {
    
    res.json({
        message: "Signup endpoint!"
    });
});

app.post("/user/signin", function (req, res) {
    
    res.json({
        message: "Signin endpoint!"
    });
});

app.get("/user/purchases", function (req, res) {
    
    res.json({
        message: "Purchases endpoint!"
    });
});

app.get("/course/purchases", function (req, res) {
    // you would expect the user to pay money to purchase a course
    
    res.json({
        message: "Purchases endpoint!"
    });
});

app.get("/courses", function (req, res) {
    
    res.json({
        message: "Pourses endpoint!"
    });
});

app.listen(3000);