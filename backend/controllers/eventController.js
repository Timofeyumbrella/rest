const { Event } = require("../models");
const formatResponse = require("../utils/format");
const ApiError = require("../error/ApiError");
const catchWrapper = require("../utils/catchWrapper");

const eventController = {
  findAll: async (req, res) => {
    const { page = 1, limit = 20 } = req.query;
    const maxLimit = 40;
    const startIndex = (page - 1) * Math.min(limit, maxLimit);

    const events = await Event.findAll({
      offset: startIndex,
      limit: Math.min(limit, maxLimit),
    });

    formatResponse(res, events);
  },

  find: async (req, res) => {
    const event = await Event.findOne({ where: { id: req.params.id } });

    if (!event) throw new ApiError(404);

    formatResponse(res, event);
  },

  create: async (req, res) => {
    const { title, description, price, date } = req.body;

    if (!title || !description) {
      throw new ApiError(400);
    }

    const event = await Event.create({ title, description, price, date });

    formatResponse(res, event);
  },

  update: async (req, res) => {
    const { title, description, price, date } = req.body;

    const eventToUpdate = await Event.findOne({ where: { id: req.params.id } });

    if (!eventToUpdate) {
      throw new ApiError(404);
    }

    await eventToUpdate.update({ title, description, price, date });

    formatResponse(res, eventToUpdate);
  },

  destroy: async (req, res) => {
    const eventToDelete = await Event.findOne({ where: { id: req.params.id } });

    if (!eventToDelete) throw new ApiError(404);

    await eventToDelete.destroy();

    formatResponse(res, eventToDelete);
  },
};

module.exports = catchWrapper(eventController);
