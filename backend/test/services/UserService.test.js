const UserService = require("../../services/UserService");
const { User } = require("../../models");

jest.mock("../../models", () => ({
  User: {
    findAll: jest.fn().mockResolvedValue([
      {
        id: 234237,
        name: "user name",
        age: 23,
        email: "user@gmail.com",
        gender: "mario card",
        password: "$2b$10$63aWrgJjWJKOG0lD96Bn.ezgK5hv.irfwjDsLe6UHqH",
        roleId: 1,
      },
      {
        id: 82341,
        name: "user name",
        age: 32,
        email: "plainuser@gmail.com",
        gender: "margarita",
        password: "$2b$10$qs00BN.2L/Re2Wht9MhAi",
        roleId: 2,
      },
      {
        id: 70123,
        name: "user name",
        age: 17,
        email: "minoruser@gmail.com",
        gender: "jail",
        password: "$ezgK5hv.irfwjDsLe6UHqH",
        roleId: 1,
      },
    ]),
    findOne: jest.fn().mockResolvedValue({
      id: 20341,
      name: "user name",
      age: 18,
      email: "user@gmail.com",
      gender: "box",
      password: "$ezgK5hv.irfwjDsLe6UHqH",
      roleId: 1,
    }),
    update: jest.fn().mockResolvedValue({
      id: 7841,
      name: "updated username",
      age: 93,
      email: "updateduser@gmail.com",
      gender: "up to date",
      password: "$ezgK5hvjcxzdasfjkerKdsfL",
      roleId: 1,
    }),
    destroy: jest.fn().mockResolvedValue({
      id: 27340324,
      name: "destroyed username",
      age: 39,
      email: "destroyeduser@gmail.com",
      gender: "dead inside",
      password: "$cxzdasfjkerKddsaf234askdJfdska",
      roleId: 1,
    }),
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
