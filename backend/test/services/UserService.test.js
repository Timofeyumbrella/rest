const UserService = require("../../services/UserService");
const { User } = require("../../models");

const userServiceMocks = require("../../mocks/services/userServiceMocks");
const ApiError = require("../../error/ApiError");

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
  it("should call user model findAll method and return found users", () => {
    const usersPromise = UserService.findAll(1, 15);

    expect(User.findAll).toHaveBeenCalledWith({ limit: 15, offset: 0 });
    expect(usersPromise).resolves.toEqual(userServiceMocks.findAll);
  });

  it("should call user model findOne method and return found user", () => {
    const userPromise = UserService.find(3);

    expect(User.findOne).toHaveBeenCalledWith({ where: { id: 3 } });
    expect(userPromise).resolves.toEqual(userServiceMocks.findOne);
  });

  it("should call user model update method and return updated user", async () => {
    const user = {
      id: 1,
      update: jest.fn().mockResolvedValue(userServiceMocks.update),
    };

    User.findOne.mockResolvedValueOnce(user);

    expect(
      await UserService.update({
        password: "testpassword",
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiVGltb2ZleSIsImFnZSI6MTgsImVtYWlsIjoidGltZnJvbW1pdEBnbWFpbC5jb20iLCJnZW5kZXIiOiJnYWNoaSByZW1peCIsInJvbGVJZCI6MX0sInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2MzI3NTk3NTMsImV4cCI6MTYzMjc2MzM1M30.xtyvwZw8M8-NrKg3qvtWJzBr9GeWiZWD4oSTOxuIYqI",
      })
    ).toEqual(userServiceMocks.update);
  });

  it("should call user model destroy method and return destroyed user", async () => {
    const user = await UserService.destroy(1);

    expect(User.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    expect(User.destroy).toHaveBeenCalledWith({ where: { id: 1 } });
    expect(user).toEqual(userServiceMocks.findOne);
  });

  it("should throw an error if user not found", () => {
    User.findOne.mockResolvedValueOnce(null);

    expect(UserService.find(3)).rejects.toBeInstanceOf(ApiError);
  });

  it("should throw an error if user not found", () => {
    User.findOne.mockResolvedValueOnce(null);

    expect(
      UserService.update({
        password: "testpassword",
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiVGltb2ZleSIsImFnZSI6MTgsImVtYWlsIjoidGltZnJvbW1pdEBnbWFpbC5jb20iLCJnZW5kZXIiOiJnYWNoaSByZW1peCIsInJvbGVJZCI6MX0sInR5cGUiOiJhY2Nlc3MiLCJpYXQiOjE2MzI3NTk3NTMsImV4cCI6MTYzMjc2MzM1M30.xtyvwZw8M8-NrKg3qvtWJzBr9GeWiZWD4oSTOxuIYqI",
      })
    ).rejects.toBeInstanceOf(ApiError);
  });

  it("should throw an error if user not found", () => {
    User.findOne.mockResolvedValueOnce(null);

    expect(UserService.destroy(1)).rejects.toBeInstanceOf(ApiError);
  });
});
