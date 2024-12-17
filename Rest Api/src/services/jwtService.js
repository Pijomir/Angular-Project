const jwt = require('jsonwebtoken');

const secret = 'this IS probably Very super secr3t $ecret';

function createToken(userData) {
    const payload = {
        _id: userData._id,
        username: userData.username,
        email: userData.email,
    }

    const token = jwt.sign(payload, secret, {
        expiresIn: '5d'
    });

    return token;
}

function verifyToken(token) {
    const data = jwt.verify(token, secret);

    return data;
}

module.exports = {
    createToken,
    verifyToken
}