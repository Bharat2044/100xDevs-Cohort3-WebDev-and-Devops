// Import the User model from the database module for user authentication
const { User } = require("../db");  

// Middleware function for handling user authentication
function userMiddleware(req, res, next) {
    // Extract the username and password from request headers for authentication
    const username = req.headers.username;
    const password = req.headers.password;

    // Query the database to find a user with the provided username and password
    User.findOne({
        username: username, // Search for the user by username
        password: password, // Match the provided password
    })
    .then(function (user) {
        // If a user is found, proceed to the next middleware or route handler
        if (user) {
            next(); // Continue to the next middleware/route
        } else {
            // If no user is found, respond with a 403 Forbidden status
            res.status(403).json({
                message: "User does not exist", // Inform the client of authentication failure
            });
        }
    })
    .catch(err => {
        // Handle any errors that occur during the database query
        res.status(500).json({
            message: "An error occurred while authenticating user", // Inform the client of server error
            error: err, // Log the specific error for debugging
        });
    });
}

// Export the userMiddleware function for use in other parts of the application
module.exports = userMiddleware;  
