const { Event } = require("../../models");

describe("Event Controller", () => {
  test("creating an event", async () => {
    const event = await Event.create({
      title: "event title",
      description: "event description",
      price: "324.5",
      date: "2022-03-27",
    });

    expect(event).toMatchObject({
      id: expect.any(Number),
      title: "event title",
      description: "event description",
      price: "324.5",
      date: new Date("2022-03-27"),
    });
  });

  test("getting all events", async () => {
    const events = await Event.findAll();

    expect(events).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: expect.any(String),
          description: expect.any(String),
          price: expect.any(String),
          date: expect.any(Date),
        }),
      ])
    );
  });

  test("getting an event", async () => {
    const { dataValues: event } = await Event.findOne({
      where: { title: "event title" },
    });

    expect(event).toMatchObject({
      id: expect.any(Number),
      title: "event title",
      description: "event description",
      price: "324.5",
      date: new Date("2022-03-27"),
    });
  });

  test("updating an event", async () => {
    const event = await Event.findOne({ where: { title: "event title" } });

    await event.update({
      title: "updated title",
      description: "updated description",
      price: "300",
      date: "2022-03-28",
    });

    expect(event).toMatchObject({
      id: expect.any(Number),
      title: "updated title",
      description: "updated description",
      price: "300",
      date: new Date("2022-03-28"),
    });
  });

  test("deleting an event", async () => {
    const event = await Event.findOne({
      where: { title: "updated title" },
    });

    await event.destroy();

    expect(event).toMatchObject({
      id: expect.any(Number),
      title: "updated title",
      description: "updated description",
      price: "300",
      date: new Date("2022-03-28"),
    });

    await event.destroy();
  });
});
