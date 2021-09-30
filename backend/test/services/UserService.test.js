const UserService = require("../../services/UserService");
const { User } = require("../../models");
const userServiceMocks = require("../../mocks/services/userServiceMocks");

jest.mock("../../models", () => {
  const userServiceMocks = require("../../mocks/services/userServiceMocks");

  return {
    User: {
      findAll: jest.fn().mockResolvedValue(userServiceMocks.findAll),
      findOne: jest.fn().mockResolvedValue(userServiceMocks.findOne),
      update: jest.fn().mockResolvedValue(userServiceMocks.update),
      destroy: jest.fn().mockResolvedValue(userServiceMocks.destroy),
    },
  };
});

describe("User service", () => {
  it("should call user model findAll method", async () => {
    await UserService.findAll();

    expect(UserService.findAll()).resolves.toEqual(userServiceMocks.findAll);
    expect(User.findAll).toHaveBeenCalled();
  });

  it("should call user model findOne method", async () => {
    await UserService.find();

    expect(UserService.find()).resolves.toEqual(userServiceMocks.findOne);
    expect(User.findOne).toHaveBeenCalled();
  });

  it("should call user model update method", async () => {
    const user = {
      id: 1,
      update: jest.fn().mockResolvedValue(userServiceMocks.update),
    };
    User.findOne.mockResolvedValueOnce(user);

    await UserService.update({
      password: "testpassword",
      authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiVGltb2ZleSIsImFnZSI6MTgsImVtYWlsIjoidGltZnJvbW1pdEBnbWFpbC5jb20iLCJnZW5kZXIiOiJnYWNoaSByZW1peCIsInJvbGVJZCI6MX0sInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2MzI3NTk3NTMsImV4cCI6MTYzMjc2MzM1M30.xtyvwZw8M8-NrKg3qvtWJzBr9GeWiZWD4oSTOxuIYqI",
    });

    expect(user.update()).resolves.toEqual(userServiceMocks.update);
    expect(user.update).toHaveBeenCalled();
  });

  it("should call user model destroy method", async () => {
    const user = {
      id: 1,
      destroy: jest.fn().mockResolvedValue(userServiceMocks.destroy),
    };
    User.findOne.mockResolvedValueOnce(user);

    await UserService.destroy(1);

    expect(user.destroy()).resolves.toEqual(userServiceMocks.destroy);
    expect(user.destroy).toHaveBeenCalled();
  });
});
