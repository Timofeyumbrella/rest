const { User } = require("../models");
const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const atob = require("atob");

const generateTokens = require("../utils/auth");

const UserService = {
  findAll: (page, limit) => {
    const maxLimit = 40;
    const startIndex = (page - 1) * Math.min(limit, maxLimit);

    return User.findAll({
      offset: startIndex,
      limit: Math.min(limit, maxLimit),
    });
  },

  find: async (id) => {
    const user = await User.findOne({ where: { id } });

    if (!user) throw new ApiError(404);

    return user;
  },

  update: async ({ authorization, id, password, roleId, ...userFields }) => {
    const userToUpdate = await User.findOne({ where: { id } });
    const jwtUser = JSON.parse(atob(authorization.split(".")[1])).user;

    if (!userToUpdate) {
      throw new ApiError(404);
    }

    const updatedUser = await userToUpdate.update({
      password: await bcrypt.hash(password, 10),
      roleId: jwtUser.roleId === 1 ? roleId : 2,
      ...userFields,
    });

    return generateTokens(updatedUser);
  },

  destroy: async (id) => {
    const userToDelete = await User.findOne({ where: { id } });

    if (!userToDelete) throw new ApiError(404);

    await User.destroy({ where: { id } });

    return userToDelete;
  },
};

module.exports = UserService;
