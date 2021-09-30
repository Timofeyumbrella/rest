const FollowService = require("../../services/FollowService");
const { Follow } = require("../../models");

jest.mock("../../models", () => {
  const followServiceMocks = require("../../mocks/services/followServiceMocks");

  return {
    Follow: {
      create: jest.fn().mockResolvedValue(followServiceMocks.create),
      findAll: jest.fn().mockResolvedValue(followServiceMocks.findAll),
    },
  };
});

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
