const { Event } = require("../models");
const ApiError = require("../error/ApiError");
const formatDecorator = require("../decorator/formatDecorator");

const eventController = {
  findAll: async (req) => {
    const { page = 1, limit = 20 } = req.query;
    const maxLimit = 40;
    const startIndex = (page - 1) * Math.min(limit, maxLimit);

    const events = await Event.findAll({
      offset: startIndex,
      limit: Math.min(limit, maxLimit),
    });

    return events;
  },

  find: async (req) => {
    const event = await Event.findOne({ where: { id: req.params.id } });

    if (!event) throw new ApiError(404);

    return event;
  },

  create: async (req) => {
    const { title, description, price, date } = req.body;

    if (!title || !description) {
      throw new ApiError(400);
    }

    const event = await Event.create({ title, description, price, date });

    return event;
  },

  update: async (req) => {
    const { title, description, price, date } = req.body;

    const eventToUpdate = await Event.findOne({ where: { id: req.params.id } });

    if (!eventToUpdate) {
      throw new ApiError(404);
    }

    await eventToUpdate.update({ title, description, price, date });

    return eventToUpdate;
  },

  destroy: async (req) => {
    const eventToDelete = await Event.findOne({ where: { id: req.params.id } });

    if (!eventToDelete) throw new ApiError(404);

    await eventToDelete.destroy();

    return eventToDelete;
  },
};

module.exports = formatDecorator(eventController);
