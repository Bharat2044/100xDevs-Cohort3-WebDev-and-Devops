function userMiddleware(req, res, next) {
    console.log('Session:', req.session); // Log session to debug
    
    if (req.session && req.session.userId) {
        req.userId = req.session.userId; // Attach userId to the request object
        return next();
    }
    
    return res.status(401).json({
        message: "Unauthorized",
    });
}

module.exports = {
    userMiddleware,
};
