const {
  mockRequest,
  mockResponse,
  mockNext,
} = require("../../utils/interceptor");

const EventController = require("../../controllers/EventController");
const EventService = require("../../services/EventService");

jest.mock("../../services/EventService", () => ({
  create: jest.fn(() => {
    return "create";
  }),
  findAll: jest.fn(() => {
    return "findAll";
  }),
  find: jest.fn(() => {
    return "find";
  }),
  update: jest.fn(() => {
    return "update";
  }),
  destroy: jest.fn(() => {
    return "destroy";
  }),
}));

describe("Event controller", () => {
  it("should call event service create method", async () => {
    const req = mockRequest();

    req.validated = {
      authorization: process.env.TOKEN_EXAMPLE,
      title: "event title",
      price: 324.5,
      description: "event description",
      date: new Date(),
    };

    const res = mockResponse();
    const next = mockNext();

    await EventController.create(req, res, next);

    expect(EventService.create).toHaveBeenCalled();
  });

  it("should call event service find all method", async () => {
    const req = mockRequest();

    req.validated = {
      page: 1,
      limit: 5,
      authorization: process.env.TOKEN_EXAMPLE,
    };

    const res = mockResponse();
    const next = mockNext();

    await EventController.findAll(req, res, next);

    expect(EventService.findAll).toHaveBeenCalled();
  });

  it("should call event service find method", async () => {
    const req = mockRequest();

    req.validated = {
      authorization: process.env.TOKEN_EXAMPLE,
      id: 10,
    };

    const res = mockResponse();
    const next = mockNext();

    await EventController.find(req, res, next);

    expect(EventService.find).toHaveBeenCalled();
  });

  it("should call event service update method", async () => {
    const req = mockRequest();

    req.validated = {
      authorization: process.env.TOKEN_EXAMPLE,
      id: 1,
      title: "updated title",
      price: 5129.29,
      description: "udpated description",
      date: new Date(),
    };

    const res = mockResponse();
    const next = mockNext();

    await EventController.update(req, res, next);

    expect(EventService.update).toHaveBeenCalled();
  });

  it("should call service destroy method", async () => {
    const req = mockRequest();

    req.validated = {
      authorization: process.env.TOKEN_EXAMPLE,
      id: 1,
    };

    const res = mockResponse();
    const next = mockNext();

    await EventController.destroy(req, res, next);

    expect(EventService.destroy).toHaveBeenCalled();
  });
});
