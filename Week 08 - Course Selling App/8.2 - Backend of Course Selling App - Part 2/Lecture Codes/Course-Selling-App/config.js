// Retrieve the JWT admin password from environment variables
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD; // Access the JWT secret for admin authentication

// Retrieve the JWT user password from environment variables
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD; // Access the JWT secret for user authentication

// Export the retrieved JWT passwords so they can be used in other modules
module.exports = {
    JWT_ADMIN_PASSWORD, // Exporting the admin JWT password
    JWT_USER_PASSWORD, // Exporting the user JWT password
};
