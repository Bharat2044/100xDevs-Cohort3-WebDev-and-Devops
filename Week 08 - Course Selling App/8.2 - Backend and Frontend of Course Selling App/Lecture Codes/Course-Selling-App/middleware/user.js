// Import the jwt module
const jwt = require("jsonwebtoken");

// Import the JWT User Password from the config file
const { JWT_USER_PASSWORD } = require("../config");

// Define the userMiddleware function to verify the user token
function userMiddleware(req, res, next) {
    // Get the token from the request headers
    const token = req.headers.authorization;

    try {
        // Verify the token using the JWT User Password
        const decoded = jwt.verify(token, JWT_USER_PASSWORD);

        // Set the userId in the request object
        req.userId = decoded.id;

        // Call the next middleware
        next();
    } catch (error) {
        // If the token is invalid, send an error message to the client
        return res.status(403).json({
            message: "You are not Signed in!",
        });
    }
}

// Export the userMiddleware function so that it can be used in other files
module.exports = {
    userMiddleware,
};
