const bcrypt = require("bcrypt");

const { User } = require("../models");

const AuthService = {
  register: async ({ password, ...userFields }) => {
    return User.create({
      password: await bcrypt.hash(password, 10),
      roleId: 2,
      ...userFields,
    });
  },

  login: async (email) =>
    User.findOne({
      where: { email },
    }),
};

module.exports = AuthService;
