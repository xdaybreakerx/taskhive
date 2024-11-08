const jwt = require('jsonwebtoken');

let jwtSecretKey = process.env.JWT_SECRET_KEY;

function generateJWT(userId, username, role = null) {
    return jwt.sign(
        {
            userId: userId,
            username: username,
            role: role,
        },
        jwtSecretKey,
        {
            expiresIn: '7d',
        }
    );
}

function decodeJWT(tokenToDecode) {
    return jwt.verify(tokenToDecode, jwtSecretKey);
}


module.exports = {
    generateJWT,
    decodeJWT,
};
