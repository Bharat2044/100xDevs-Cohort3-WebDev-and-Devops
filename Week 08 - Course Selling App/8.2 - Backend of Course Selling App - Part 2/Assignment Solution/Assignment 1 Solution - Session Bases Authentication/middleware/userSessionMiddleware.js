const session = require('express-session');
const { userSessionConfig } = require('../config/sessionConfig');

const userSessionMiddleware = session(userSessionConfig);

module.exports = userSessionMiddleware;
