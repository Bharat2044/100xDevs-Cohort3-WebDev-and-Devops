// Import mongoose module for connecting to MongoDB
const mongoose = require("mongoose");

// Connect to MongoDB 
mongoose.connect("mongodb+srv://100xdevs:WvaTca0509mb90YX@cluster0.ossjd.mongodb.net/course_selling_app")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB", err);
    });

// Admin Schema definition
const AdminSchema = new mongoose.Schema({
    username: { type: String, unique: true }, // Unique username for the admin
    password: String // Admin password 
});

// User Schema definition
const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true }, // Unique username for the user
    password: String, // User password 
    purchasedCourses: [ // List of purchased course IDs
        {
            type: mongoose.Schema.Types.ObjectId, // Reference to Course model
            ref: "Course",
        },
    ],
});

// Course Schema definition
const CourseSchema = new mongoose.Schema({
    title: String, // Course title
    description: String, // Course description
    imageLink: String, // URL to course image
    price: Number, // Course price
});


// Create models for Admin, User, and Course using the respective schemas
const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

// Export the models for use in other modules
module.exports = {
    Admin,
    User,
    Course,
};
