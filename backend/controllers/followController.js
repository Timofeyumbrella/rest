const { Follow } = require("../models");
const ApiError = require("../error/ApiError");
const formatDecorator = require("../decorator/formatDecorator");

const followController = {
  create: (subscription) => Follow.create(subscription),

  findAll: () => {
    return Follow.findAll();
  },
};

module.exports = formatDecorator(followController);
