const session = require('express-session');
const { adminSessionConfig } = require('../config/sessionConfig');

const adminSessionMiddleware = session(adminSessionConfig);

module.exports = adminSessionMiddleware;
