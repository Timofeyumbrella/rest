const AuthService = require("../../services/AuthService");
const { User } = require("../../models");

jest.mock("../../models", () => ({
  User: {
    create: jest.fn().mockResolvedValue({
      id: 23432432432342,
      password: "$2b$10$63aWrgJjWJKOG0lD96Bn.ezgK5hv.irfwjD",
      name: "user",
      age: 29,
      email: "user@gmail.com",
      gender: "dominos pizza",
    }),
    findOne: jest.fn().mockResolvedValue({
      access:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJuYW1lIjoiUGhpbGlwIiwiYWdlIjoxOCwiZW1haWwiOiJwaGlsQGdtYWlsLmNvbSIsImdlbmRlciI6InNhZCIsInJvbGVJZCI6Mn0sInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2MzI4MzM4NzAsImV4cCI6MTYzMjgzNzQ3MH0.3PxtDJqp0hmmsS3Fkq4D4uzy7svSVGih2PQQv_wU7Gg",

      refresh:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJuYW1lIjoiUGhpbGlwIiwiYWdlIjoxOCwiZW1haWwiOiJwaGlsQGdtYWlsLmNvbSIsImdlbmRlciI6InNhZCIsInJvbGVJZCI6Mn0sInR5cGUiOiJyZWZyZXNoIiwiaWF0IjoxNjMyODMzODcwLCJleHAiOjE2MzU0MjU4NzB9.OwDmqgBcEJvlkMbB7Vaj3xNyxgOTbBA3uaW9lBxQwi8",
    }),
  },
}));

describe("Auth service", () => {
  it("should call user model create method", async () => {
    await AuthService.register({ password: "userpassword" });

    expect(User.create).toHaveBeenCalled();
  });

  it("should call user model fineOne method", async () => {
    await AuthService.login("useremail@gmail.com");

    expect(User.findOne).toHaveBeenCalled();
  });
});
