const bcrypt = require("bcrypt");

const { User } = require("../models");
const formatDecorator = require("../decorator/formatDecorator");

const generateTokens = require("../utils/auth");

const authController = {
  register: async ({ password, email, ...userFields }) => {
    return User.create({
      password: await bcrypt.hash(password, 10),
      email,
      ...userFields,
    });
  },

  login: async ({ email, _ }) => {
    return generateTokens(email);
  },
};

module.exports = formatDecorator(authController);
