const { Follow } = require("../models");
const formatDecorator = require("../decorator/formatDecorator");

const followController = {
  create: (subscription) => Follow.create(subscription),

  findAll: () => Follow.findAll(),
};

module.exports = formatDecorator(followController);
