const FollowService = require("../../services/FollowService");
const { Follow } = require("../../models");
const followServiceMocks = require("../../mocks/services/followServiceMocks");

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
  it("should call follow model findAll method and test findAll method return value", async () => {
    FollowService.findAll();

    expect(Follow.findAll).toHaveBeenCalled();
    expect(FollowService.findAll()).resolves.toEqual(
      followServiceMocks.findAll
    );
  });

  it("should call follow model create method and test create method return value", async () => {
    FollowService.create({ eventId: 1, userId: 2 });

    expect(Follow.create).toHaveBeenCalledWith({ eventId: 1, userId: 2 });
    expect(FollowService.create({ eventId: 1, userId: 2 })).resolves.toEqual(
      followServiceMocks.create
    );
  });
});
