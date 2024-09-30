// Import the express module for creating a web server
const express = require("express"); 

// Import body-parser middleware for parsing request bodies
const bodyParser = require("body-parser"); 

// Create an instance of an Express application
const app = express(); 

// Import the server port from the configuration file
const { PORT } = require("./config"); 

// Import the admin and user routes
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user"); 

// Middleware for parsing request bodies in JSON format
app.use(bodyParser.json());

// Set up routing for admin and user endpoints
app.use("/admin", adminRouter); // Route all admin-related requests to the admin router
app.use("/user", userRouter); // Route all user-related requests to the user router

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log the server status to the console
});
