const formatDecorator = require("../decorator/formatDecorator");
const createPolicyDecorator = require("../decorator/createPolicyDecorator");
const userPolicy = require("../policies/userPolicy");
const UserService = require("../services/UserService");
const entity = require("../utils/entity");

const userController = {
  findAll: ({ page = 1, limit = 20 }) => UserService.findAll(page, limit),

  find: ({ id }) => UserService.find(id),

  update: ({ authorization, id, password, roleId, ...userFields }) =>
    UserService.update({ authorization, id, password, roleId, ...userFields }),

  destroy: ({ id }) => UserService.destroy(id),
};

module.exports = formatDecorator(
  createPolicyDecorator({ ...userPolicy, entity: entity(__filename) })(
    userController
  )
);
