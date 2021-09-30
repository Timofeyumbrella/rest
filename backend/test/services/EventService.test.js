const EventService = require("../../services/EventService");
const { Event } = require("../../models");
const eventServiceMocks = require("../../mocks/services/eventServiceMocks");

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
  it("should call event model create method", async () => {
    EventService.create();

    expect(Event.create).toHaveBeenCalled();
    expect(EventService.create()).resolves.toEqual(eventServiceMocks.create);
  });
  it("should call event model findAll method", async () => {
    EventService.findAll(1, 15);

    expect(Event.findAll).toHaveBeenCalled();
    expect(EventService.findAll()).resolves.toEqual(eventServiceMocks.findAll);
  });
  it("should call event model find method", async () => {
    EventService.find();

    expect(EventService.find()).resolves.toEqual(eventServiceMocks.findOne);
    expect(Event.findOne).toHaveBeenCalled();
  });

  it("should call event model update method", async () => {
    const event = {
      id: 1,
      update: jest.fn().mockResolvedValue(eventServiceMocks.update),
    };
    Event.findOne.mockResolvedValueOnce(event);

    expect(await EventService.update({ id: 1 })).toEqual(
      eventServiceMocks.update
    );
  });

  it("should call event model destroy method", async () => {
    const event = {
      id: 1,
      destroy: jest.fn().mockResolvedValue(eventServiceMocks.destroy),
    };
    Event.findOne.mockResolvedValueOnce(event);

    expect(await EventService.destroy(1)).toEqual(eventServiceMocks.destroy);
  });
});
