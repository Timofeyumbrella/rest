const {
  mockRequest,
  mockResponse,
  mockNext,
} = require("../../utils/interceptor");

const UserController = require("../../controllers/UserController");
const UserService = require("../../services/UserService");

jest.mock("../../services/UserService", () => ({
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

describe("User controller", () => {
  it("should call user service findAll method", async () => {
    const req = mockRequest();

    req.validated = {
      authorization: process.env.TOKEN_EXAMPLE,
      page: 1,
      limit: 15,
    };

    const res = mockResponse();
    const next = mockNext();

    await UserController.findAll(req, res, next);

    expect(UserService.findAll).toHaveBeenCalled();
  });

  it("should call user service find method", async () => {
    const req = mockRequest();

    req.validated = {
      authorization: process.env.TOKEN_EXAMPLE,
      id: 1,
    };

    const res = mockResponse();
    const next = mockNext();

    await UserController.find(req, res, next);

    expect(UserService.find).toHaveBeenCalled();
  });

  it("should call user service update method", async () => {
    const req = mockRequest();

    req.validated = {
      authorization: process.env.TOKEN_EXAMPLE,
      id: 1,
      name: "user",
      age: 18,
      email: "user@gmail.com",
      gender: "non binary",
      password: "Plainuser4321",
      roleId: "2",
    };

    const res = mockResponse();
    const next = mockNext();

    await UserController.update(req, res, next);

    expect(UserService.update).toHaveBeenCalled();
  });

  it("should call user service destroy method", async () => {
    const req = mockRequest();

    req.validated = {
      authorization: process.env.TOKEN_EXAMPLE,
      id: 1,
    };

    const res = mockResponse();
    const next = mockNext();

    await UserController.destroy(req, res, next);

    expect(UserService.destroy).toHaveBeenCalled();
  });
});
