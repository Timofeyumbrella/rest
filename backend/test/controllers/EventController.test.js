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

jest.mock("../../services/EventService", () => ({
  create: jest.fn().mockResolvedValue("create"),
  findAll: jest.fn().mockResolvedValue("findAll"),
  find: jest.fn().mockResolvedValue("find"),
  update: jest.fn().mockResolvedValue("update"),
  destroy: jest.fn().mockResolvedValue("destroy"),
}));

describe("Event controller", () => {
  it("should call event service create method", async () => {
    req.validated = {
      authorization: process.env.TOKEN_EXAMPLE,
      title: "event title",
      price: 324.5,
      description: "event description",
      date: "2021-09-24T11:24:57.348Z",
    };

    await EventController.create(req, res, next);

    expect(EventService.create).toHaveBeenCalled();
    expect(await EventService.create()).toEqual("create");
  });

  it("should call event service findAll method", async () => {
    req.validated = {
      authorization: process.env.TOKEN_EXAMPLE,
      page: 1,
      limit: 5,
    };

    await EventController.findAll(req, res, next);

    expect(EventService.findAll).toHaveBeenCalled();
    expect(await EventService.findAll()).toEqual("findAll");
  });

  it("should call event service find method", async () => {
    req.validated = {
      authorization: process.env.TOKEN_EXAMPLE,
      id: 10,
    };

    await EventController.find(req, res, next);

    expect(EventService.find).toHaveBeenCalledWith(req.validated.id);
    expect(await EventService.find()).toEqual("find");
  });

  it("should call event service update method", async () => {
    req.validated = {
      authorization: process.env.TOKEN_EXAMPLE,
      id: 1,
      title: "updated title",
      price: 5129.29,
      description: "udpated description",
      date: "2021-09-24T11:24:57.348Z",
    };

    await EventController.update(req, res, next);

    expect(EventService.update).toHaveBeenCalledWith({
      id: req.validated.id,
      ...req.validated,
    });
    expect(await EventService.update()).toEqual("update");
  });

  it("should call service destroy method", async () => {
    req.validated = {
      authorization: process.env.TOKEN_EXAMPLE,
      id: 1,
    };

    await EventController.destroy(req, res, next);

    expect(EventService.destroy).toHaveBeenCalledWith(req.validated.id);
    expect(await EventService.destroy()).toEqual("destroy");
  });
});
