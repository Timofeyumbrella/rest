const {
  mockRequest,
  mockResponse,
  mockNext,
} = require("../../utils/interceptor");

const AuthController = require("../../controllers/AuthController");
const AuthService = require("../../services/AuthService");

jest.mock("../../services/AuthService", () => ({
  register: jest.fn(() => {
    return "register";
  }),
  login: jest.fn(() => {
    return "login";
  }),
}));

describe("Auth controller", () => {
  it("should call auth service register method", async () => {
    const req = mockRequest();

    req.validated = {
      name: "user",
      age: 18,
      email: "user@gmail.com",
      gender: "binary",
      password: "Plainuser1234",
    };

    const res = mockResponse();
    const next = mockNext();

    await AuthController.register(req, res, next);

    expect(AuthService.register).toHaveBeenCalled();
  });

  it("should call auth service login method", async () => {
    const req = mockRequest();

    req.validated = {
      email: "user@gmail.com",
      password: "Plainuser1234",
    };

    const res = mockResponse();
    const next = mockNext();

    await AuthController.login(req, res, next);

    expect(AuthService.login).toHaveBeenCalled();
  });
});
