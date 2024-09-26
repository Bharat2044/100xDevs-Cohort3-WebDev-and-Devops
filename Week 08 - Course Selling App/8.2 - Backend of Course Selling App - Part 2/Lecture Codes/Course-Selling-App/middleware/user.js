// Import the jwt module to handle JSON Web Tokens
const jwt = require("jsonwebtoken");

// Import the JWT User Password from the config file for verification
const { JWT_USER_PASSWORD } = require("../config");

// Define the userMiddleware function to verify the user token
function userMiddleware(req, res, next) {
    // Get the token from the request headers, which is expected to be sent in the authorization header
    const token = req.headers.authorization;

    // Use a try-catch block to handle any errors that may occur during token verification
    try {
        // Verify the token using the JWT User Password to check its validity
        const decoded = jwt.verify(token, JWT_USER_PASSWORD);

        // Set the userId in the request object from the decoded token for later use
        req.userId = decoded.id;

        // Call the next middleware in the stack to proceed with the request
        next();
    } catch (error) {
        // If the token is invalid or an error occurs during verification, send an error message to the client
        return res.status(403).json({
            message: "You are not Signed in!", // Inform the user that they are not authorized
        });
    }
}

// Export the userMiddleware function so that it can be used in other files
module.exports = {
    userMiddleware, // Exporting the middleware for use in routes
};
