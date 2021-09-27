const AuthService = require("../../services/AuthService");
const { User } = require("../../models");

jest.mock("../../models", () => ({
  User: {
    create: jest.fn().mockResolvedValue("create"),
    findOne: jest.fn().mockResolvedValue("findOne"),
  },
}));

describe("Auth service", () => {
  it("should call user model create method", async () => {
    await AuthService.register({ password: "userpassword" });

    expect(User.create).toHaveBeenCalled();
    expect(await User.create()).toEqual("create");
  });

  it("should call user model fineOne method", async () => {
    await AuthService.login("useremail@gmail.com");

    expect(User.findOne).toHaveBeenCalled();
  });
});
