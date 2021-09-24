const {
  mockRequest,
  mockResponse,
  mockNext,
} = require("../../utils/interceptor");

const UserController = require("../../controllers/UserController");
const UserService = require("../../services/UserService");

let req;
let res;
let next;

beforeEach(() => {
  req = mockRequest();
  res = mockResponse();
  next = mockNext();
});

jest.mock("../../services/UserService", () => ({
  findAll: jest.fn().mockResolvedValue("findAll"),
  find: jest.fn().mockResolvedValue("find"),
  update: jest.fn().mockResolvedValue("update"),
  destroy: jest.fn().mockResolvedValue("destroy"),
}));

describe("User controller", () => {
  it("should call user service findAll method", async () => {
    req.validated = {
      authorization: process.env.TOKEN_EXAMPLE,
      page: 1,
      limit: 15,
    };

    await UserController.findAll(req, res, next);

    expect(UserService.findAll).toHaveBeenCalled();
    expect(await UserService.findAll()).toEqual("findAll");
  });

  it("should call user service find method", async () => {
    req.validated = {
      authorization: process.env.TOKEN_EXAMPLE,
      id: 1,
    };

    await UserController.find(req, res, next);

    expect(UserService.find).toHaveBeenCalledWith(req.validated.id);
    expect(await UserService.find()).toEqual("find");
  });

  it("should call user service update method", async () => {
    req.validated = {
      authorization: process.env.TOKEN_EXAMPLE,
      id: 1,
      name: "user",
      age: 18,
      email: "user@gmail.com",
      gender: "non binary",
      password: "Plainuser4321",
      roleId: 2,
    };

    await UserController.update(req, res, next);

    expect(UserService.update).toHaveBeenCalledWith({
      id: req.validated.id,
      ...req.validated,
    });
    expect(await UserService.update()).toEqual("update");
  });

  it("should call user service destroy method", async () => {
    req.validated = {
      authorization: process.env.TOKEN_EXAMPLE,
      id: 1,
    };

    await UserController.destroy(req, res, next);

    expect(UserService.destroy).toHaveBeenCalledWith(req.validated.id);
    expect(await UserService.destroy()).toEqual("destroy");
  });
});
