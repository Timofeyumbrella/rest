const bcrypt = require("bcrypt");

const AuthService = require("../services/AuthService");

const formatDecorator = require("../decorator/formatDecorator");

const authController = {
  register: async ({ password, ...userFields }) =>
    AuthService.register({
      password: await bcrypt.hash(password, 10),
      ...userFields,
    }),

  login: async ({ email }) => AuthService.login(email),
};

module.exports = formatDecorator(authController);
