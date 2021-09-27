const FollowService = require("../../services/FollowService");
const { Follow } = require("../../models");

jest.mock("../../models", () => ({
  Follow: {
    create: jest.fn().mockResolvedValue("create"),
    findAll: jest.fn().mockResolvedValue("findAll"),
  },
}));

describe("Follow service", () => {
  it("should call follow model findAll method", async () => {
    FollowService.findAll();

    expect(Follow.findAll).toHaveBeenCalled();
    expect(await Follow.findAll()).toEqual("findAll");
  });

  it("should call follow model create method", async () => {
    FollowService.create();

    expect(Follow.create).toHaveBeenCalled();
    expect(await Follow.create()).toEqual("create");
  });
});
