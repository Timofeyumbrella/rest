const EventService = require("../../services/EventService");
const { Event } = require("../../models");

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
  });
  it("should call event model findAll method", async () => {
    EventService.findAll(1, 15);

    expect(Event.findAll).toHaveBeenCalled();
  });
  it("should call event model find method", async () => {
    EventService.find();

    expect(Event.findOne).toHaveBeenCalled();
  });

  it("should call event model update method", async () => {
    const event = { id: 1, update: jest.fn() };
    Event.findOne.mockResolvedValueOnce(event);

    await EventService.update({ id: 1 });

    expect(event.update).toHaveBeenCalled();
  });

  it("should call event model destroy method", async () => {
    const event = { id: 3, destroy: jest.fn() };
    Event.findOne.mockResolvedValueOnce(event);

    await EventService.destroy(3);

    expect(event.destroy).toHaveBeenCalled();
  });
});
