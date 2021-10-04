const {
  mockRequest,
  mockResponse,
  mockNext,
} = require("../../utils/interceptor");

const FollowController = require("../../controllers/FollowController");
const FollowService = require("../../services/FollowService");

let req;
let res;
let next;

beforeEach(() => {
  req = mockRequest();
  res = mockResponse();
  next = mockNext();
});

jest.mock("../../services/FollowService", () => {
  const followControllerMocks = require("../../mocks/controllers/followControllerMocks");

  return {
    create: jest.fn().mockResolvedValue(followControllerMocks.create),
    findAll: jest.fn().mockResolvedValue(followControllerMocks.findAll),
  };
});

jest.mock("../../models", () => {
  return {
    Permission: {
      findOne: jest.fn().mockResolvedValue({
        id: 1,
        create: "any",
        find: "any",
        findAll: "any",
        update: "any",
        destroy: "any",
        createdAt: "2021-10-01T14:23:16.347Z",
        updatedAt: "2021-10-01T14:23:16.347Z",
      }),
    },
  };
});

describe("Follow controller", () => {
  it("should call follow service create method", async () => {
    req.validated = {
      userId: 1,
      eventId: 1,
    };

    await FollowController.create(req, res, next);

    expect(FollowService.create).toHaveBeenCalledWith(req.validated);
  });

  it("should call follow service findAll method", async () => {
    await FollowController.findAll(req, res, next);

    expect(FollowService.findAll).toHaveBeenCalledWith();
  });
});
