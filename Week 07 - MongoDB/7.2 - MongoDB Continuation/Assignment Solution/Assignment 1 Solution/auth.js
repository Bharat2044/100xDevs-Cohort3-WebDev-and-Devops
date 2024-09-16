// Import jwt modules
const jwt = require("jsonwebtoken");

// Create a JWT_SECRET variable for the secret key
const JWT_SECRET = "hellobacchomajaloclasska";

// Create an auth middleware function to authenticate the user
function auth(req, res, next) {
    // Get the token from the request headers
    const token = req.headers.authorization;

    try {
        // Verify the token using the jwt.verify() method
        const decodedData = jwt.verify(token, JWT_SECRET);

        // Get the userId from the token
        req.userId = decodedData.id;

        // Call the next middleware function
        next();
    } catch (error) {
        // If the token is invalid, send an error message to the client
        res.status(403).json({
            message: "Invalid Token!",
        });
    }
}

// Export the auth middleware function and JWT_SECRET for use in other files
module.exports = {
    auth,
    JWT_SECRET
}