// Import the JWT module
const jwt = require("jsonwebtoken");

// Import the JWT Admin Password from the config file
const { JWT_ADMIN_PASSWORD } = require("../config");

// Define the adminMiddleware function to verify the admin token
function adminMiddleware(req, res, next) {
    const token = req.headers.authorization;

    try {
        // Verify the token using the JWT Admin Password
        const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);

        // Set the adminId in the request object
        req.adminId = decoded.id;

        // Call the next middleware
        next();
    } catch (error) {
        // If the token is invalid, send an error message to the client
        return res.status(403).json({
            message: "You are not Signed in!",
        });
    }
}

// Export the adminMiddleware function so that it can be used in other files
module.exports = {
    adminMiddleware,
};
