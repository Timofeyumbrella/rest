const { Permission } = require("../models");

const eventPolicy = {
  findAll: async () => true,
  create: async () => true,
};

module.exports = eventPolicy;
