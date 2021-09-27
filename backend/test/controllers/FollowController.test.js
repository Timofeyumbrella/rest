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

jest.mock("../../services/FollowService", () => ({
  create: jest.fn().mockResolvedValue("create"),
  findAll: jest.fn().mockResolvedValue("findAll"),
}));

describe("Follow controller", () => {
  it("should call follow service create method", async () => {
    req.validated = {
      userId: 1,
      eventId: 1,
    };

    await FollowController.create(req, res, next);

    expect(FollowService.create).toHaveBeenCalledWith({
      userId: req.validated.userId,
      eventId: req.validated.eventId,
    });
  });

  it("should call follow service findAll method", async () => {
    await FollowController.findAll(req, res, next);

    expect(FollowService.findAll).toHaveBeenCalled();
  });
});
