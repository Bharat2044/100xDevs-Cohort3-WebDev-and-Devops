// Middleware to check if the user is authenticated
function adminMiddleware(req, res, next) {
    if (req.session && req.session.adminId) {
        req.adminId = req.session.adminId; // Attach adminId to the request object
        return next(); // Proceed to the next middleware or route handler
    }
    
    return res.status(401).json({ message: "Unauthorized" }); // Respond with 401 if not authenticated
}

module.exports = {
    adminMiddleware,
};
