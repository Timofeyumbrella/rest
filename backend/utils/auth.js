const jwt = require("jsonwebtoken");

const generateAccessToken = (user) =>
  jwt.sign({ user, type: "access" }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

const generateRefreshToken = (user) =>
  jwt.sign({ user, type: "refresh" }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

const generateTokens = (user) => ({
  access: generateAccessToken(user),
  refresh: generateRefreshToken(user),
});

module.exports = generateTokens;
