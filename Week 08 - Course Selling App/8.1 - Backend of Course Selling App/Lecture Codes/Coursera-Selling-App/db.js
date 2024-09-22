// Import mongoose to interact with MongoDB
const mongoose = require("mongoose");

// Use Schema and ObjectId from mongoose for creating models
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

// Define the User schema with email, password, firstName, and lastName fields
const userSchema = new Schema({
    email: { type: String, unique: true }, // Make email unique to avoid duplicate entries
    password: String,
    firstName: String,
    lastName: String,
});

// Define the Admin schema with email, password, firstName, and lastName fields
const adminSchema = new Schema({
    email: { type: String, unique: true }, // Make email unique to avoid duplicate entries
    password: String,
    firstName: String,
    lastName: String,
});

// Define the Course schema with title, description, price, imageUrl, and creatorId fields
const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId,
});

// Define the Purchase schema with userId and courseId fields
const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId,
});

// Create models for User, Admin, Course, and Purchase using the respective schemas
const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

// Export the userModel, adminModel, courseModel, and purchaseModel to be used in other files
module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel,
};
