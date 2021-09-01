const { User } = require("../models");
const ApiError = require("../error/ApiError");
const formatDecorator = require("../decorator/formatDecorator");
const bcrypt = require("bcrypt");

const userController = {
  findAll: ({ page = 1, limit = 20 }) => {
    const maxLimit = 40;
    const startIndex = (page - 1) * Math.min(limit, maxLimit);

    return User.findAll({
      offset: startIndex,
      limit: Math.min(limit, maxLimit),
    });
  },

  find: async ({ id }) => {
    const user = await User.findOne({ where: { id } });

    if (!user) throw new ApiError(404);

    return user;
  },

  create: ({ password, ...otherData }) =>
    User.create({
      password: bcrypt.hashSync(password, 10),
      ...otherData,
    }),

  update: async ({ password, ...otherData }) => {
    const userToUpdate = await User.findOne({ where: { id } });

    if (!userToUpdate) {
      throw new ApiError(404);
    }

    return userToUpdate.update({
      password: bcrypt.hashSync(password, 10),
      ...otherData,
    });
  },

  destroy: async ({ id }) => {
    const userToDelete = await User.findOne({ where: { id } });

    if (!userToDelete) throw new ApiError(404);

    await userToDelete.destroy();

    return userToDelete;
  },
};

module.exports = formatDecorator(userController);
