const { Permission } = require("../models");

const eventPolicy = {
  findAll: async () => true,
  create: async () => {
    const permission = await Permission.findOne({
      where: { roleId: 1, entity: "event" },
    });

    return permission.dataValues.create === "any";
  },
};

module.exports = eventPolicy;
