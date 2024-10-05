// Import mongoose to interact with MongoDB
const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Define Schema for creating new models
const ObjectId = mongoose.Types.ObjectId; // Use ObjectId type for MongoDB document references

// Define the Course schema
const courseSchema = new Schema({
    title: String, // Title of the course
    description: String, // Description of the course content
    price: Number, // Price of the course
    imageUrl: String, // URL for the course image
    creatorId: ObjectId, // Reference to the creator's ObjectId (Admin)
});

// Create and export the Course model
const courseModel = mongoose.model("course", courseSchema);
module.exports = {
    courseModel,
};
