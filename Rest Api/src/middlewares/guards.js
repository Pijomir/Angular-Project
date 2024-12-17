function isUser() {
    return function (req, res, next) {
        if (!req.user) {
            return res.status(401).json({ message: "Missing credentials" });
        } 

        next();
    };
}

module.exports = {
    isUser,
};