const {
  mockRequest,
  mockResponse,
  mockNext,
} = require("../../utils/interceptor");

const EventController = require("../../controllers/EventController");
const EventService = require("../../services/EventService");

let req;
let res;
let next;

beforeEach(() => {
  req = mockRequest();
  res = mockResponse();
  next = mockNext();
});

jest.mock("../../services/EventService", () => {
  const eventControllerMocks = require("../../mocks/controllers/eventControllerMocks");

  return {
    create: jest.fn().mockResolvedValue(eventControllerMocks.create),
    findAll: jest.fn().mockResolvedValue(eventControllerMocks.findAll),
    find: jest.fn().mockResolvedValue(eventControllerMocks.find),
    update: jest.fn().mockResolvedValue(eventControllerMocks.update),
    destroy: jest.fn().mockResolvedValue(eventControllerMocks.destroy),
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

describe("Event controller", () => {
  const authorization =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiVGltb2ZleSIsImFnZSI6MTgsImVtYWlsIjoidGltZnJvbW1pdEBnbWFpbC5jb20iLCJnZW5kZXIiOiJnYWNoaSByZW1peCIsInJvbGVJZCI6MX0sInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2MzI3NTk3NTMsImV4cCI6MTYzMjc2MzM1M30.xtyvwZw8M8-NrKg3qvtWJzBr9GeWiZWD4oSTOxuIYqI";

  it("should call event service create method", async () => {
    req.validated = {
      authorization,
      title: "event title",
      price: 324.5,
      description: "event description",
      date: new Date("2021-09-23").toISOString(),
    };

    await EventController.create(req, res, next);

    expect(EventService.create).toHaveBeenCalledWith(req.validated);
  });

  it("should call event service findAll method", async () => {
    req.validated = {
      authorization,
      page: 1,
      limit: 5,
    };

    await EventController.findAll(req, res, next);

    expect(EventService.findAll).toHaveBeenCalledWith(1, 5);
  });

  it("should call event service find method", async () => {
    req.validated = {
      authorization,
      id: 10,
    };

    await EventController.find(req, res, next);

    expect(EventService.find).toHaveBeenCalledWith(req.validated.id);
  });

  it("should call event service update method", async () => {
    req.validated = {
      authorization,
      id: 1,
      title: "updated title",
      price: 5129.29,
      description: "udpated description",
      date: new Date("2021-09-23").toISOString(),
    };

    await EventController.update(req, res, next);

    expect(EventService.update).toHaveBeenCalledWith(req.validated);
  });

  it("should call service destroy method", async () => {
    req.validated = {
      authorization,
      id: 1,
    };

    await EventController.destroy(req, res, next);

    expect(EventService.destroy).toHaveBeenCalledWith(req.validated.id);
  });
});
