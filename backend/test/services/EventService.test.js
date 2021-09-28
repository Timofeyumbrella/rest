const EventService = require("../../services/EventService");
const { Event } = require("../../models");

jest.mock("../../models", () => ({
  Event: {
    create: jest.fn().mockResolvedValue({
      id: 237483287432,
      title: "test event title",
      price: 324.3,
      description: "test event description",
      date: new Date("2021-09-05").toISOString(),
    }),
    findAll: jest.fn().mockResolvedValue([
      {
        id: 3243248832741,
        title: "test event title",
        price: 324.3,
        description: "test event description",
        date: new Date("2022-07-05").toISOString(),
      },
      {
        id: 32419872453,
        title: "test event title",
        price: 324.3,
        description: "test event description",
        date: new Date("2022-07-09").toISOString(),
      },
      {
        id: 94723153222,
        title: "test event title",
        price: 324.3,
        description: "test event description",
        date: new Date("2022-07-01").toISOString(),
      },
      {
        id: 87201473276,
        title: "test event title",
        price: 324.3,
        description: "test event description",
        date: new Date("2022-01-05").toISOString(),
      },
      {
        id: 7123783247,
        title: "test event title",
        price: 323.3,
        description: "test event description",
        date: new Date("2022-08-01").toISOString(),
      },
    ]),
    findOne: jest.fn().mockResolvedValue({
      id: 9301852521982,
      title: "test event title",
      price: 789.3,
      description: "test event description",
      date: new Date("2019-06-11").toISOString(),
    }),
    update: jest.fn().mockResolvedValue({
      id: 870137221,
      title: "updated event title",
      price: 3241.52,
      description: "updated event description",
      date: new Date("2018-09-11"),
    }),
    destroy: jest.fn().mockResolvedValue({
      id: 12302347,
      title: "destroyed event title",
      price: 3241.52,
      description: "destroyed event description",
      date: new Date("2017-09-10"),
    }),
  },
}));

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
