// Import the JWT module to handle JSON Web Tokens
const jwt = require("jsonwebtoken");

// Import the JWT Admin Password from the config file for verification
const { JWT_ADMIN_PASSWORD } = require("../config");

// Define the adminMiddleware function to verify the admin token
function adminMiddleware(req, res, next) {
    // Retrieve the authorization token from the request headers
    const token = req.headers.authorization;

    // Use a try-catch block to handle any errors that may occur during token verification
    try {
        // Verify the token using the JWT Admin Password to ensure it is valid
        const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);

        // Set the adminId in the request object from the decoded token for later use
        req.adminId = decoded.id;

        // Call the next middleware in the stack to proceed with the request
        next();
    } catch (error) {
        // If the token is invalid or an error occurs during verification, send an error message to the client
        return res.status(403).json({
            message: "You are not Signed in!", // Inform the user that they are not authorized
        });
    }
}

// Export the adminMiddleware function so that it can be used in other files
module.exports = {
    adminMiddleware, // Exporting the middleware for use in routes
};
