const EventService = require("../../services/EventService");
const { Event } = require("../../models");

jest.mock("../../models", () => ({
  Event: {
    create: jest.fn().mockResolvedValue("create"),
    findAll: jest.fn().mockResolvedValue("findAll"),
    findOne: jest.fn().mockResolvedValue("findOne"),
    update: jest.fn().mockResolvedValue("update"),
    destroy: jest.fn().mockResolvedValue("destroy"),
  },
}));

describe("Event service", () => {
  it("should call event model create method", async () => {
    EventService.create({});

    expect(Event.create).toHaveBeenCalled();
    expect(await Event.create()).toEqual("create");
  });
  it("should call event model findAll method", async () => {
    EventService.findAll(1, 15);

    expect(Event.findAll).toHaveBeenCalled();
    expect(await Event.findAll()).toEqual("findAll");
  });
  it("should call event model find method", async () => {
    EventService.find(2);

    expect(Event.findOne).toHaveBeenCalled();
    expect(await Event.findOne()).toEqual("findOne");
  });
});
