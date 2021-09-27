const { Follow } = require("../models");

const followService = {
  create: (subscription) => Follow.create(subscription),

  findAll: () => Follow.findAll(),
};

module.exports = followService;
