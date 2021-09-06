const jwt = require("jsonwebtoken");

const generateAccessToken = (email) =>
  jwt.sign({ email, type: "access" }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

const generateRefreshToken = (email) =>
  jwt.sign({ email, type: "refresh" }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

const generateTokens = (email) => ({
  access: generateAccessToken(email),
  refresh: generateRefreshToken(email),
});

module.exports = generateTokens;
