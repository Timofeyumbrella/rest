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

jest.mock("../../services/UserService", () => {
  const userControllerMocks = require("../../mocks/controllers/userControllerMocks");

  return {
    findAll: jest.fn().mockResolvedValue(userControllerMocks.findAll),
    find: jest.fn().mockResolvedValue(userControllerMocks.find),
    update: jest.fn().mockResolvedValue(userControllerMocks.update),
    destroy: jest.fn().mockResolvedValue(userControllerMocks.destroy),
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

describe("User controller", () => {
  const authorization =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiVGltb2ZleSIsImFnZSI6MTgsImVtYWlsIjoidGltZnJvbW1pdEBnbWFpbC5jb20iLCJnZW5kZXIiOiJnYWNoaSByZW1peCIsInJvbGVJZCI6MX0sInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2MzI3NTk3NTMsImV4cCI6MTYzMjc2MzM1M30.xtyvwZw8M8-NrKg3qvtWJzBr9GeWiZWD4oSTOxuIYqI";

  it("should call user service findAll method", async () => {
    req.validated = {
      authorization,
      page: 1,
      limit: 15,
    };

    await UserController.findAll(req, res, next);

    expect(UserService.findAll).toHaveBeenCalledWith(1, 15);
  });

  it("should call user service find method", async () => {
    req.validated = {
      authorization,
      id: 1,
    };

    await UserController.find(req, res, next);

    expect(UserService.find).toHaveBeenCalledWith(req.validated.id);
  });

  it("should call user service update method", async () => {
    req.validated = {
      authorization,
      id: 1,
      name: "user",
      age: 18,
      email: "user@gmail.com",
      gender: "non binary",
      password: "Plainuser4321",
      roleId: 2,
    };

    await UserController.update(req, res, next);

    expect(UserService.update).toHaveBeenCalledWith(req.validated);
  });

  it("should call user service destroy method", async () => {
    req.validated = {
      authorization,
      id: 1,
    };

    await UserController.destroy(req, res, next);

    expect(UserService.destroy).toHaveBeenCalledWith(req.validated.id);
  });
});
