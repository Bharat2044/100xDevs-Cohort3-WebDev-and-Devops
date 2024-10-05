// Import mongoose to interact with MongoDB
const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Define Schema for creating new models
const ObjectId = mongoose.Types.ObjectId; // Use ObjectId type for MongoDB document references

// Define the Purchase schema
const purchaseSchema = new Schema({
    userId: ObjectId, // Reference to the user's ObjectId who made the purchase
    courseId: ObjectId, // Reference to the purchased course's ObjectId
});

// Create and export the Purchase model
const purchaseModel = mongoose.model("purchase", purchaseSchema);
module.exports = {
    purchaseModel,
};
