// Import the dotenv module to load environment variables from the .env file
require('dotenv').config();

// Import the connect-mongo package for session storage in MongoDB
const MongoStore = require('connect-mongo');
const { Cookie } = require('express-session');

// Retrieve MongoDB URL and session secrets from environment variables
const MONGODB_URL = process.env.MONGODB_URL;
const SESSION_ADMIN_SECRET = process.env.SESSION_ADMIN_SECRET;
const SESSION_USER_SECRET = process.env.SESSION_USER_SECRET;

adminSessionConfig = {
    secret: SESSION_ADMIN_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: MONGODB_URL })
};

userSessionConfig = {
    secret: SESSION_USER_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: MONGODB_URL })
};

module.exports = {
    adminSessionConfig,
    userSessionConfig,
};