// Import mongoose module for connecting to MongoDB
const mongoose = require("mongoose");

// Import MongoDB URI from config file
const { MONGO_URI } = require("../config"); 

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log("Connected to MongoDB successfully")) // Log success message
    .catch((err) => console.error("MongoDB connection error:", err)); // Log error message if connection fails

// Define the Admin schema
const AdminSchema = new mongoose.Schema({
    username: { type: String, unique: true }, // Unique username for the admin
    password: { type: String }, // Admin password (should be hashed)
});

// Define the User schema
const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true }, // Unique username for the user
    password: String, // User password (should be hashed)
    purchasedCourses: [
        // List of purchased course IDs
        {
            type: mongoose.Schema.Types.ObjectId, // Reference to Course model
            ref: "Course",
        },
    ],
});

// Define the Course schema
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

// Export the Admin, User, and Course models for use in other modules
module.exports = {
    Admin,
    User,
    Course,
};
