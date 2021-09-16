const { Permission } = require("../models");
const atob = require("atob");

const eventPolicy = {
  findAll: async ({ authorization }) => {
    const jwtUser = JSON.parse(atob(authorization.split(".")[1])).user;

    const permission = await Permission.findOne({
      where: { roleId: jwtUser.roleId, entity: "event" },
    });

    return permission.dataValues.findAll === "any";
  },

  find: async ({ authorization }) => {
    const jwtUser = JSON.parse(atob(authorization.split(".")[1])).user;

    const permission = await Permission.findOne({
      where: { roleId: jwtUser.roleId, entity: "event" },
    });

    return permission.dataValues.find === "any";
  },

  create: async ({ authorization }) => {
    const jwtUser = JSON.parse(atob(authorization.split(".")[1])).user;

    const permission = await Permission.findOne({
      where: { roleId: jwtUser.roleId, entity: "event" },
    });

    return permission.dataValues.create === "any";
  },

  update: async ({ authorization }) => {
    const jwtUser = JSON.parse(atob(authorization.split(".")[1])).user;

    const permission = await Permission.findOne({
      where: { roleId: jwtUser.roleId, entity: "event" },
    });

    return permission.dataValues.update === "any";
  },

  destroy: async ({ authorization }) => {
    const jwtUser = JSON.parse(atob(authorization.split(".")[1])).user;

    const permission = await Permission.findOne({
      where: { roleId: jwtUser.roleId, entity: "event" },
    });

    return permission.dataValues.destroy === "any";
  },
};

module.exports = eventPolicy;
