function cors() {
    return function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Authorization');
        res.setHeader("Access-Control-Allow-Credentials", true);

        if (req.method === 'OPTIONS') {
            return res.status(200).end();
        }

        next();
    };
}

module.exports = { cors };