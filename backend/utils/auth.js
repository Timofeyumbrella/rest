require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateAccessToken = (email) => {
    return jwt.sign({ email, type: 'access' }, process.env.JWT_SECRET, {
        expiresIn: "1h"
    })
};

const generateRefreshToken = (email) => {
    return jwt.sign(
        { email, type: 'refresh' },
        process.env.JWT_REFRESH_SECRET,
        {
            expiresIn: '2h'
        }
    )
};

const generateTokens = (email) => ({
    access: generateAccessToken(email),
    refresh: generateRefreshToken(email)
});

module.exports = generateTokens;