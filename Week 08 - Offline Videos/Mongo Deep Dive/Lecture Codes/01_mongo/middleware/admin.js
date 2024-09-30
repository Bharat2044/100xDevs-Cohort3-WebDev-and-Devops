// Import the Admin model from the database module for authentication
const { Admin } = require("../db");  

// Middleware function for handling admin authentication
function adminMiddleware(req, res, next) {
    // Extract the username and password from request headers for authentication
    const username = req.headers.username;
    const password = req.headers.password;

    // Query the database to find an admin with the provided username and password
    Admin.findOne({
        username: username, // Search for the admin by username
        password: password, // Match the provided password
    })
    .then(function (admin) {
        // If an admin is found, proceed to the next middleware or route handler
        if (admin) {
            next(); // Continue to the next middleware/route
        } else {
            // If no admin is found, respond with a 403 Forbidden status
            res.status(403).json({
                message: "Admin does not exist", // Inform the client of authentication failure
            });
        }
    })
    .catch(err => {
        // Handle any errors that occur during the database query
        res.status(500).json({
            message: "An error occurred while authenticating admin", // Inform the client of server error
            error: err, // Log the specific error for debugging
        });
    });
}

// Export the adminMiddleware function for use in other parts of the application
module.exports = adminMiddleware;  
