const UserService = require("../../services/UserService");
const { User } = require("../../models");

jest.mock("../../models", () => ({
  User: {
    findAll: jest.fn().mockResolvedValue("findAll"),
    findOne: jest.fn().mockResolvedValue("findOne"),
    update: jest.fn().mockResolvedValue("update"),
    destroy: jest.fn().mockResolvedValue("destroy"),
  },
}));

describe("User service", () => {
  it("should call user model findAll method", async () => {
    await UserService.findAll();

    expect(User.findAll).toHaveBeenCalled();
  });

  it("should call user model findOne method", async () => {
    await UserService.find();

    expect(User.findOne).toHaveBeenCalled();
  });

  it("should call user model update method", async () => {
    const user = {
      id: 1,
      update: jest.fn(),
    };
    User.findOne.mockResolvedValueOnce(user);

    await UserService.update({
      password: "testpassword",
      authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiVGltb2ZleSIsImFnZSI6MTgsImVtYWlsIjoidGltZnJvbW1pdEBnbWFpbC5jb20iLCJnZW5kZXIiOiJnYWNoaSByZW1peCIsInJvbGVJZCI6MX0sInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2MzI3NTk3NTMsImV4cCI6MTYzMjc2MzM1M30.xtyvwZw8M8-NrKg3qvtWJzBr9GeWiZWD4oSTOxuIYqI",
    });

    expect(user.update).toHaveBeenCalled();
  });

  it("should call user model destroy method", async () => {
    const user = { id: 1, destroy: jest.fn() };
    User.findOne.mockResolvedValueOnce(user);

    await UserService.destroy(1);

    expect(user.destroy).toHaveBeenCalled();
  });
});
