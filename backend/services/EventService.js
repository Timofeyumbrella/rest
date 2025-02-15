const { Event } = require("../models");
const ApiError = require("../error/ApiError");

const EventService = {
  findAll: (page, limit) => {
    const maxLimit = 40;
    const startIndex = (page - 1) * Math.min(limit, maxLimit);

    return Event.findAll({
      offset: startIndex,
      limit: Math.min(limit, maxLimit),
    });
  },

  find: async (id) => {
    const event = await Event.findOne({ where: { id } });

    if (!event) throw new ApiError(404);

    return event;
  },

  create: (event) => Event.create(event),

  update: async ({ id, ...eventFields }) => {
    const eventToUpdate = await Event.findOne({ where: { id } });

    if (!eventToUpdate) {
      throw new ApiError(404);
    }

    return eventToUpdate.update({ ...eventFields });
  },

  destroy: async (id) => {
    const eventToDelete = await Event.findOne({ where: { id } });

    if (!eventToDelete) throw new ApiError(404);

    await Event.destroy({ where: { id } });

    return eventToDelete;
  },
};

module.exports = EventService;
