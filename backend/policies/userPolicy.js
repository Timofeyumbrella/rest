const { Permission } = require("../models");
const atob = require("atob");

const userPolicy = {
  findAll: async ({ authorization }) => {
    const jwtUser = JSON.parse(atob(authorization.split(".")[1])).user;

    const permission = await Permission.findOne({
      where: { roleId: jwtUser.roleId, entity: "user" },
    });

    return permission.dataValues.findAll === "any";
  },

  find: async ({ authorization, id }) => {
    const jwtUser = JSON.parse(atob(authorization.split(".")[1])).user;

    const permission = await Permission.findOne({
      where: { roleId: jwtUser.roleId, entity: "user" },
    });

    return (
      permission.dataValues.find === "any" ||
      (permission.dataValues.find === "own" && jwtUser.id === id)
    );
  },

  update: async ({ authorization, id }) => {
    const jwtUser = JSON.parse(atob(authorization.split(".")[1])).user;

    const permission = await Permission.findOne({
      where: { roleId: jwtUser.roleId, entity: "user" },
    });

    return (
      permission.dataValues.update === "any" ||
      (permission.dataValues.update === "own" && jwtUser.id === id)
    );
  },

  destroy: async ({ authorization, id }) => {
    const jwtUser = JSON.parse(atob(authorization.split(".")[1])).user;

    const permission = await Permission.findOne({
      where: { roleId: jwtUser.roleId, entity: "user" },
    });

    return (
      permission.dataValues.destroy === "any" ||
      (permission.dataValues.destroy === "own" && jwtUser.id === id)
    );
  },
};

module.exports = userPolicy;
