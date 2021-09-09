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

  login: async ({ email }) => {
    const { name, age, gender, roleId } = await User.findOne({
      where: { email },
    });

    return generateTokens({ name, age, email, gender, roleId });
  },
};

module.exports = formatDecorator(authController);
