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
  it("should call follow model findAll method and return found follows", () => {
    const followPromise = FollowService.findAll();

    expect(Follow.findAll).toHaveBeenCalledWith();
    expect(followPromise).resolves.toEqual(followServiceMocks.findAll);
  });

  it("should call follow model create method and return created follow", () => {
    const followPromise = FollowService.create({ eventId: 1, userId: 2 });

    expect(Follow.create).toHaveBeenCalledWith({ eventId: 1, userId: 2 });
    expect(followPromise).resolves.toEqual(followServiceMocks.create);
  });
});
