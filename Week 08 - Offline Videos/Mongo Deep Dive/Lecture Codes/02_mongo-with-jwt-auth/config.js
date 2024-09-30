// Secret key for JWT
const JWT_SECRET = "ahha_tamatar_bada_mazedar"; 

// Server port number 
const PORT = 3000; 

// MongoDB connection URI 
const MONGO_URI = "mongodb+srv://100xdevs:WvaTca0509mb90YX@cluster0.ossjd.mongodb.net/course_selling_app"; 

// Export configuration constants for use in other files
module.exports = {
    JWT_SECRET, // Export the JWT secret key
    PORT, // Export the server port
    MONGO_URI, // Export the MongoDB connection URI
};
