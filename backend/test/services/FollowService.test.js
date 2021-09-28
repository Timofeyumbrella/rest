const FollowService = require("../../services/FollowService");
const { Follow } = require("../../models");

jest.mock("../../models", () => ({
  Follow: {
    create: jest.fn().mockResolvedValue({
      userId: 972847012,
      eventId: 3723412,
    }),
    findAll: jest.fn().mockResolvedValue([
      {
        userId: 8970123,
        eventId: 80327401,
      },
      {
        userId: 32043,
        eventId: 98123740,
      },
    ]),
  },
}));

describe("Follow service", () => {
  it("should call follow model findAll method", async () => {
    FollowService.findAll();

    expect(Follow.findAll).toHaveBeenCalled();
  });

  it("should call follow model create method", async () => {
    FollowService.create();

    expect(Follow.create).toHaveBeenCalled();
  });
});
