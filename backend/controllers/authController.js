const bcrypt = require("bcrypt");

const { User } = require("../models");
const formatDecorator = require("../decorator/formatDecorator");

const generateTokens = require("../utils/auth");

const authController = {
  register: async ({ password, ...userFields }) => {
    return User.create({
      password: await bcrypt.hash(password, 10),
      roleId: 2,
      ...userFields,
    });
  },

  login: async ({ email }) => {
    const { id, name, age, gender, roleId } = await User.findOne({
      where: { email },
    });

    return generateTokens({ id, name, age, email, gender, roleId });
  },
};

module.exports = formatDecorator(authController);
