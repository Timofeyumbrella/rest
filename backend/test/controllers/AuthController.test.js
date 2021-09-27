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

jest.mock("../../services/AuthService", () => ({
  register: jest.fn().mockResolvedValue("register"),
  login: jest.fn().mockResolvedValue("login"),
}));

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

    expect(AuthService.login).toHaveBeenCalled();
  });
});
