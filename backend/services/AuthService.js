const { User } = require("../models");

const generateTokens = require("../utils/auth");

const AuthService = {
  register: ({ password, ...userFields }) =>
    User.create({
      password,
      roleId: 2,
      ...userFields,
    }),

  login: async (email) => {
    const { id, name, age, gender, roleId } = await User.findOne({
      where: { email },
    });

    return generateTokens({ id, name, age, email, gender, roleId });
  },
};

module.exports = AuthService;
