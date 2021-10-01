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
  it("should call event model create method and test create method return value", async () => {
    EventService.create({
      title: "event title",
      description: "event description",
      price: 324.5,
      date: new Date("2022-03-27").toISOString(),
    });

    expect(Event.create).toHaveBeenCalledWith({
      title: "event title",
      description: "event description",
      price: 324.5,
      date: new Date("2022-03-27").toISOString(),
    });
    expect(
      EventService.create({
        title: "event title",
        description: "event description",
        price: 324.5,
        date: new Date("2022-03-27").toISOString(),
      })
    ).resolves.toEqual(eventServiceMocks.create);
  });
  it("should call event model findAll method and test findAll method return value", async () => {
    EventService.findAll(1, 15);

    expect(Event.findAll).toHaveBeenCalledWith({ limit: 15, offset: 0 });
    expect(EventService.findAll(1, 15)).resolves.toEqual(
      eventServiceMocks.findAll
    );
  });
  it("should call event model findOne method and test find method return value", async () => {
    EventService.find(3);

    expect(Event.findOne).toHaveBeenCalledWith({ where: { id: 3 } });
    expect(EventService.find(3)).resolves.toEqual(eventServiceMocks.findOne);
  });

  it("should call event model update method and test update method return value", async () => {
    const event = {
      id: 1,
      update: jest.fn().mockResolvedValue(eventServiceMocks.update),
    };

    Event.findOne.mockResolvedValueOnce(event);

    expect(await EventService.update({ id: 1 })).toEqual(
      eventServiceMocks.update
    );
  });

  it("should call event model destroy method and test destroy method return value", async () => {
    await EventService.destroy(1);

    expect(Event.destroy).toHaveBeenCalledWith({ where: { id: 1 } });
    expect(await EventService.destroy(1)).toEqual(eventServiceMocks.findOne);
  });
});
