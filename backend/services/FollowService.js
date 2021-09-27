const { Follow } = require("../models");

const followController = {
  create: (subscription) => Follow.create(subscription),

  findAll: () => Follow.findAll(),
};

module.exports = followController;
