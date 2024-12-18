function isUser() {
    return function (req, res, next) {
        if (!req.headers['x-authorization']) {
            return res.status(401).json({ message: "Missing credentials" });
        } 

        next();
    };
}

module.exports = {
    isUser,
};