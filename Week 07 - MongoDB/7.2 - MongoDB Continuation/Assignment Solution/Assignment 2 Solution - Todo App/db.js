// Import mongoose to interact with MongoDB
const mongoose = require("mongoose");

// Use Schema and ObjectId from mongoose for creating models
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// Define the User schema with fields for email, password, and name
const User = new Schema({
    email: { type: String, unique: true }, // Make email unique to avoid duplicate entries
    password: String,
    name: String,
});

// Define the Todo schema with fields for title, done, userId, createdAt, and deadline
const Todo = new Schema({
    title: String,
    done: { type: Boolean, default: false }, // Default 'done' to false
    userId: ObjectId,
    createdAt: { type: Date, default: Date.now }, // Timestamp for when the todo was created
    deadline: { type: Date }, // Optional timestamp for when the todo should be done
});

// Create Mongoose models for users and todos collections using the User and Todo schemas
const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);

// Export the User and Todo models for use in other files
module.exports = {
    UserModel,
    TodoModel,
};
