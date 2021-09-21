const formatDecorator = require("../decorator/formatDecorator");
const createPolicyDecorator = require("../decorator/createPolicyDecorator");
const eventPolicy = require("../policies/eventPolicy");
const entity = require("../utils/entity");

const EventService = require("../services/EventService");

const eventController = {
  findAll: ({ page = 1, limit = 20 }) => EventService.findAll(page, limit),

  find: ({ id }) => EventService.find(id),

  create: (event) => EventService.create(event),

  update: ({ id, ...eventFields }) =>
    EventService.update({ id, ...eventFields }),

  destroy: ({ id }) => EventService.destroy(id),
};

module.exports = formatDecorator(
  createPolicyDecorator({ ...eventPolicy, entity: entity(__filename) })(
    eventController
  )
);
