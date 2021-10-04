const {
  mockRequest,
  mockResponse,
  mockNext,
} = require("../../utils/interceptor");

const AuthController = require("../../controllers/AuthController");
const AuthService = require("../../services/AuthService");

let req;
let res;
let next;

beforeEach(() => {
  req = mockRequest();
  res = mockResponse();
  next = mockNext();
});

jest.mock("../../services/AuthService", () => {
  const authControllerMocks = require("../../mocks/controllers/authControllerMocks");

  return {
    register: jest.fn().mockResolvedValue(authControllerMocks.register),
    login: jest.fn().mockResolvedValue(authControllerMocks.login),
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

describe("Auth controller", () => {
  it("should call auth service register method", async () => {
    req.validated = {
      name: "user",
      age: 18,
      email: "user@gmail.com",
      gender: "binary",
      password: "Plainuser1234",
    };

    await AuthController.register(req, res, next);

    expect(AuthService.register).toHaveBeenCalled();
  });

  it("should call auth service login method", async () => {
    req.validated = {
      email: "user@gmail.com",
      password: "Plainuser1234",
    };

    await AuthController.login(req, res, next);

    expect(AuthService.login).toHaveBeenCalledWith(req.validated.email);
  });
});
