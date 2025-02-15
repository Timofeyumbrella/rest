const EventService = require("../../services/EventService");
const { Event } = require("../../models");

const eventServiceMocks = require("../../mocks/services/eventServiceMocks");
const ApiError = require("../../error/ApiError");

jest.mock("../../models", () => {
  const eventServiceMocks = require("../../mocks/services/eventServiceMocks");

  return {
    Event: {
      create: jest.fn().mockResolvedValue(eventServiceMocks.create),
      findAll: jest.fn().mockResolvedValue(eventServiceMocks.findAll),
      findOne: jest.fn().mockResolvedValue(eventServiceMocks.findOne),
      update: jest.fn().mockResolvedValue(eventServiceMocks.update),
      destroy: jest.fn().mockResolvedValue(eventServiceMocks.destroy),
    },
  };
});

describe("Event service", () => {
  it("should call event model create method and return created event", () => {
    const eventPromise = EventService.create(eventServiceMocks.create);

    expect(Event.create).toHaveBeenCalledWith(eventServiceMocks.create);
    expect(eventPromise).resolves.toEqual(eventServiceMocks.create);
  });

  it("should call event model findAll method and return found events", () => {
    const eventsPromise = EventService.findAll(1, 15);

    expect(Event.findAll).toHaveBeenCalledWith({ limit: 15, offset: 0 });
    expect(eventsPromise).resolves.toEqual(eventServiceMocks.findAll);
  });

  it("should call event model findOne method and return found event", () => {
    const eventPromise = EventService.find(3);

    expect(Event.findOne).toHaveBeenCalledWith({ where: { id: 3 } });
    expect(eventPromise).resolves.toEqual(eventServiceMocks.findOne);
  });

  it("should call event model update method and return updated event", async () => {
    const eventToUpdate = {
      id: 1,
      update: jest.fn().mockResolvedValue(eventServiceMocks.update),
    };

    Event.findOne.mockResolvedValueOnce(eventToUpdate);

    const event = await EventService.update({ id: 1 });

    expect(Event.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    expect(event).toEqual(eventServiceMocks.update);
  });

  it("should call event model destroy method and return destroyed event", async () => {
    const event = await EventService.destroy(1);

    expect(Event.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    expect(Event.destroy).toHaveBeenCalledWith({ where: { id: 1 } });
    expect(event).toEqual(eventServiceMocks.findOne);
  });

  it("should throw an error if event not found", () => {
    Event.findOne.mockResolvedValueOnce(null);

    expect(EventService.find(3)).rejects.toThrow(ApiError);
  });

  it("should throw an error if event not found", () => {
    Event.findOne.mockResolvedValueOnce(null);

    expect(EventService.update({ id: 1 })).rejects.toThrow(ApiError);
  });

  it("should throw an error if event not found", () => {
    Event.findOne.mockResolvedValue(null);

    expect(EventService.destroy(1)).rejects.toThrow(ApiError);
  });
});
