const bcrypt = require("bcrypt");

const { User } = require("../models");
const ApiError = require('../error/ApiError');
const formatDecorator = require('../decorator/formatDecorator');

const generateTokens = require('../utils/auth');

const authController = {
  register: async ({ password, email, ...otherData }) => {
    if (await User.findOne({ where: { email } })) throw new ApiError(403);

    return User.create({
      password: await bcrypt.hash(password, 10),
      email: email,
      ...otherData,
    })
  },

  login: async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });
    
    if (!user) throw new ApiError(404);

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) throw new ApiError(403);

    return generateTokens(email);
  }
};

module.exports = formatDecorator(authController);
