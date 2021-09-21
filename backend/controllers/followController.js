const FollowService = require("../services/FollowService");
const formatDecorator = require("../decorator/formatDecorator");

const followController = {
  create: (subscription) => FollowService.create(subscription),
  findAll: () => FollowService.findAll(),
};

module.exports = formatDecorator(followController);
