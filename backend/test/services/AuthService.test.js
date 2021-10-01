const AuthService = require("../../services/AuthService");
const { User } = require("../../models");

const authServiceMocks = require("../../mocks/services/authServiceMocks");
const generateTokens = require("../../utils/auth");

jest.mock("../../utils/auth");

jest.mock("../../models", () => {
  const authServiceMocks = require("../../mocks/services/authServiceMocks");

  return {
    User: {
      create: jest.fn().mockResolvedValue(authServiceMocks.create),
      findOne: jest.fn().mockResolvedValue(authServiceMocks.findOne),
    },
  };
});

describe("Auth service", () => {
  it("should call user model create method and return registered user", () => {
    const userPromise = AuthService.register({
      email: "username@gmail.com",
      password: "userpassword",
    });

    expect(User.create).toHaveBeenCalledWith({
      email: "username@gmail.com",
      password: "userpassword",
      roleId: 2,
    });
    expect(userPromise).resolves.toEqual(authServiceMocks.create);
  });

  it("should call user model findOne method and return user tokens", async () => {
    generateTokens.mockResolvedValue({
      access:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiVGltb2ZleSIsImFnZSI6MTgsImVtYWlsIjoidGltZnJvbW1pdEBnbWFpbC5jb20iLCJnZW5kZXIiOiJnYWNoaSByZW1peCIsInJvbGVJZCI6MX0sInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2MzI5MTAwNDEsImV4cCI6MTYzMjkxMzY0MX0.xRNo82WivXi9lhYtihe6PDwxdoud6fMzI1-4I4DdWj4",
      refresh:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiVGltb2ZleSIsImFnZSI6MTgsImVtYWlsIjoidGltZnJvbW1pdEBnbWFpbC5jb20iLCJnZW5kZXIiOiJnYWNoaSByZW1peCIsInJvbGVJZCI6MX0sInR5cGUiOiJyZWZyZXNoIiwiaWF0IjoxNjMyOTEwMDQxLCJleHAiOjE2MzU1MDIwNDF9.dgV9teS1aepTY_SuoDkL2eJkIQ_zTSaoBrH52V8gx2A",
    });

    const user = await AuthService.login({
      email: "useremail@gmail.com",
      password: "userpassword",
    });

    expect(generateTokens).toHaveBeenCalledWith({
      age: 92,
      email: { email: "useremail@gmail.com", password: "userpassword" },
      gender: "github",
      id: 97234,
      name: "user",
      roleId: undefined,
    });
    expect(user).toEqual({
      access:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiVGltb2ZleSIsImFnZSI6MTgsImVtYWlsIjoidGltZnJvbW1pdEBnbWFpbC5jb20iLCJnZW5kZXIiOiJnYWNoaSByZW1peCIsInJvbGVJZCI6MX0sInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2MzI5MTAwNDEsImV4cCI6MTYzMjkxMzY0MX0.xRNo82WivXi9lhYtihe6PDwxdoud6fMzI1-4I4DdWj4",
      refresh:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiVGltb2ZleSIsImFnZSI6MTgsImVtYWlsIjoidGltZnJvbW1pdEBnbWFpbC5jb20iLCJnZW5kZXIiOiJnYWNoaSByZW1peCIsInJvbGVJZCI6MX0sInR5cGUiOiJyZWZyZXNoIiwiaWF0IjoxNjMyOTEwMDQxLCJleHAiOjE2MzU1MDIwNDF9.dgV9teS1aepTY_SuoDkL2eJkIQ_zTSaoBrH52V8gx2A",
    });
  });
});
