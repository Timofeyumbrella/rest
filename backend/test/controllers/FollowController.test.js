const {
  mockRequest,
  mockResponse,
  mockNext,
} = require("../../utils/interceptor");

const FollowController = require("../../controllers/FollowController");
const FollowService = require("../../services/FollowService");

jest.mock("../../services/FollowService", () => ({
  create: jest.fn(() => {
    return "create";
  }),
  findAll: jest.fn(() => {
    return "findAll";
  }),
}));

describe("Follow controller", () => {
  it("should call follow service create method", async () => {
    const req = mockRequest();

    req.validated = {
      userId: 1,
      eventId: 1,
    };

    const res = mockResponse();
    const next = mockNext();

    await FollowController.create(req, res, next);

    expect(FollowService.create).toHaveBeenCalled();
  });

  it("should call follow service findAll method", async () => {
    const req = mockRequest();
    const res = mockResponse();
    const next = mockNext();

    await FollowController.findAll(req, res, next);

    expect(FollowService.findAll).toHaveBeenCalled();
  });
});
