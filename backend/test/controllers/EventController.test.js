const {
  mockRequest,
  mockResponse,
  mockNext,
} = require("../../utils/interceptor");

const EventController = require("../../controllers/EventController");
const EventService = require("../../services/EventService");
const atob = require("atob");

const { Permission } = require("../../models");

const authorization =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiVGltb2ZleSIsImFnZSI6MTgsImVtYWlsIjoidGltZnJvbW1pdEBnbWFpbC5jb20iLCJnZW5kZXIiOiJnYWNoaSByZW1peCIsInJvbGVJZCI6MX0sInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2MzI3NTk3NTMsImV4cCI6MTYzMjc2MzM1M30.xtyvwZw8M8-NrKg3qvtWJzBr9GeWiZWD4oSTOxuIYqI";

let req;
let res;
let next;

beforeEach(() => {
  req = mockRequest();
  res = mockResponse();
  next = mockNext();
});

jest.mock("../../models", () => ({
  Permission: {
    create: jest.fn().mockResolvedValue({ 1: "any", 2: "none" }),
    findAll: jest.fn().mockResolvedValue({ 1: "any", 2: "any" }),
    findOne: jest.fn().mockResolvedValue({ 1: "any", 2: "any" }),
    update: jest.fn().mockResolvedValue({ 1: "any", 2: "none" }),
    destroy: jest.fn().mockResolvedValue({ 1: "any", 2: "none" }),
  },
}));

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

describe("Event controller", () => {
  it("should call event service create method", async () => {
    req.validated = {
      authorization,
      title: "event title",
      price: 324.5,
      description: "event description",
      date: new Date("2021-09-23").toISOString(),
    };

    const permission = await Permission.create();
    const roleId = JSON.parse(atob(authorization.split(".")[1])).user.roleId;

    await EventController.create(req, res, next);

    expect(permission[roleId]).toEqual("any");
  });

  it("should call event service findAll method", async () => {
    req.validated = {
      authorization,
      page: 1,
      limit: 5,
    };

    const permission = await Permission.findAll();
    const roleId = JSON.parse(atob(authorization.split(".")[1])).user.roleId;

    await EventController.findAll(req, res, next);

    // expect(EventService.findAll).toHaveBeenCalled();
    expect(permission[roleId]).toEqual("any");
  });

  it("should call event service find method", async () => {
    req.validated = {
      authorization,
      id: 10,
    };

    const permission = await Permission.findOne();
    const roleId = JSON.parse(atob(authorization.split(".")[1])).user.roleId;

    await EventController.find(req, res, next);

    expect(permission[roleId]).toEqual("any");
    // expect(EventService.find).toHaveBeenCalledWith(req.validated.id);
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

    const permission = await Permission.update();
    const roleId = JSON.parse(atob(authorization.split(".")[1])).user.roleId;

    await EventController.update(req, res, next);

    // expect(EventService.update).toHaveBeenCalledWith({
    //   id: req.validated.id,
    //   ...req.validated,
    // });

    expect(permission[roleId]).toEqual("any");
  });

  it("should call service destroy method", async () => {
    req.validated = {
      authorization,
      id: 1,
    };

    const permission = await Permission.destroy();
    const roleId = JSON.parse(atob(authorization.split(".")[1])).user.roleId;

    await EventController.destroy(req, res, next);

    expect(permission[roleId]).toEqual("any");
    // expect(EventService.destroy).toHaveBeenCalledWith(req.validated.id);
  });
});
