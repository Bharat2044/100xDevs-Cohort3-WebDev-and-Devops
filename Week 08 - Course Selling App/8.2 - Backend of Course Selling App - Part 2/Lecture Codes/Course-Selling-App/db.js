// Import mongoose to interact with MongoDB
const mongoose = require("mongoose");

// Use Schema and ObjectId from mongoose for creating models
const Schema = mongoose.Schema; // Define Schema for creating new models
const ObjectId = mongoose.Types.ObjectId; // Use ObjectId type for MongoDB document references

// Define the User schema with email, password, firstName, and lastName fields
const userSchema = new Schema({
    email: { type: String, unique: true }, // Make email unique to avoid duplicate entries
    password: String, // Password field to store user password
    firstName: String, // First name of the user
    lastName: String, // Last name of the user
});

// Define the Admin schema with email, password, firstName, and lastName fields
const adminSchema = new Schema({
    email: { type: String, unique: true }, // Make email unique to avoid duplicate entries
    password: String, // Password field to store admin password
    firstName: String, // First name of the admin
    lastName: String, // Last name of the admin
});

// Define the Course schema with title, description, price, imageUrl, and creatorId fields
const courseSchema = new Schema({
    title: String, // Title of the course
    description: String, // Description of the course content
    price: Number, // Price of the course
    imageUrl: String, // URL for the course image
    creatorId: ObjectId, // Reference to the creator's ObjectId (Admin)
});

// Define the Purchase schema with userId and courseId fields
const purchaseSchema = new Schema({
    userId: ObjectId, // Reference to the user's ObjectId who made the purchase
    courseId: ObjectId, // Reference to the purchased course's ObjectId
});

// Create models for User, Admin, Course, and Purchase using the respective schemas
const userModel = mongoose.model("user", userSchema); // Model for user collection
const adminModel = mongoose.model("admin", adminSchema); // Model for admin collection
const courseModel = mongoose.model("course", courseSchema); // Model for course collection
const purchaseModel = mongoose.model("purchase", purchaseSchema); // Model for purchase collection

// Export the userModel, adminModel, courseModel, and purchaseModel to be used in other files
module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel,
};
