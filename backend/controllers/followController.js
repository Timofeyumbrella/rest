const { Follow } = require("../models");
const ApiError = require("../error/ApiError");
const formatDecorator = require("../decorator/formatDecorator");

const followController = {
  create: ({ userId, eventId }) => {
    return Follow.create({ userId, eventId });
  },
};

module.exports = formatDecorator(followController);
