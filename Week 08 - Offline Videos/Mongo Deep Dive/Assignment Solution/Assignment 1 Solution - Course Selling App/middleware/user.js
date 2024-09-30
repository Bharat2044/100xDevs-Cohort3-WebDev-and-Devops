// Import the jsonwebtoken library for handling JWTs
const jwt = require("jsonwebtoken"); 

// Import the JWT secret from the config file
const { JWT_SECRET } = require("../config"); 
// Middleware for handling user authentication via JWT
function userMiddleware(req, res, next) {
    // Extract the bearer token from request headers
    const token = req.headers.authorization; 

    const words = token.split(" "); // Split the token into an array: ["Bearer", "token"]
    const jwtToken = words[1]; // Extract the actual token (second element)

    try {
        // Verify the token using the secret key
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

        // Check if the decoded token contains a username property
        if (decodedValue.username) {
            req.username = decodedValue.username; // Attach the username to the request object for further use
            next(); // Proceed to the next middleware or route handler
        } else {
            // If the username is not present, respond with a 403 Forbidden status
            res.status(403).json({
                message: "You are not authenticated", // Inform the client of authentication failure
            });
        }
    } catch (e) {
        // Handle any errors that occur during token verification
        res.status(401).json({
            // Respond with a 401 Unauthorized status
            message: "Incorrect inputs", // Inform the client of an authentication error
        });
    }
}

// Export the userMiddleware function for use in other parts of the application
module.exports = userMiddleware;
