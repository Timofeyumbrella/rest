const AuthService = require("../services/AuthService");

const formatDecorator = require("../decorator/formatDecorator");
const generateTokens = require("../utils/auth");

const authController = {
  register: ({ password, ...userFields }) =>
    AuthService.register({ password, ...userFields }),

  login: async ({ email }) => {
    const { id, name, age, gender, roleId } = await AuthService.login(email);

    return generateTokens({ id, name, age, email, gender, roleId });
  },
};

module.exports = formatDecorator(authController);
