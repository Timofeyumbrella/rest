const { Event } = require("../models");
const ApiError = require("../error/ApiError");
const formatDecorator = require("../decorator/formatDecorator");

const eventController = {
  findAll: ({ page = 1, limit = 20 }) => {
    const maxLimit = 40;
    const startIndex = (page - 1) * Math.min(limit, maxLimit);

    return Event.findAll({
      offset: startIndex,
      limit: Math.min(limit, maxLimit),
    });
  },

  find: async ({ id }) => {
    const event = await Event.findOne({ where: { id } });

    if (!event) throw new ApiError(404);

    return event;
  },

  create: (event) => Event.create(event),

  update: async ({ id, title, description, price, date }) => {
    const eventToUpdate = await Event.findOne({ where: { id } });

    if (!eventToUpdate) {
      throw new ApiError(404);
    }

    return eventToUpdate.update({ title, description, price, date });
  },

  destroy: async ({ id }) => {
    const eventToDelete = await Event.findOne({ where: { id } });

    if (!eventToDelete) throw new ApiError(404);

    await eventToDelete.destroy();

    return eventToDelete;
  },
};

module.exports = formatDecorator(eventController);
