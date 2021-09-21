const AuthService = require("../services/AuthService");

const formatDecorator = require("../decorator/formatDecorator");

const authController = {
  register: ({ password, ...userFields }) =>
    AuthService.register({ password, ...userFields }),

  login: ({ email }) => AuthService.login(email),
};

module.exports = formatDecorator(authController);
