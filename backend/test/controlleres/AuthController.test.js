const { User } = require("../../models");
const generateTokens = require("../../utils/auth");

describe("Auth", () => {
  it("should get all the users", async () => {
    const user = await User.create({
      name: "dummy",
      age: 18,
      email: "dummy@gmail.com",
      gender: "helicopter",
      password: "$2b$10$eNIrh3LNJvIAJABQ/blphe9b42f9Ilhus9Mu21kFaF7VqkscTIk4e",
      roleId: 1,
    });

    expect(user).toMatchObject({
      id: expect.any(Number),
      name: "dummy",
      age: 18,
      email: "dummy@gmail.com",
      gender: "helicopter",
      password: "$2b$10$eNIrh3LNJvIAJABQ/blphe9b42f9Ilhus9Mu21kFaF7VqkscTIk4e",
      roleId: 1,
    });
  });

  it("should get a user token", async () => {
    const user = await User.findOne({ where: { email: "dummy@gmail.com" } });

    expect(generateTokens(user)).toMatchObject({
      access: expect.any(String),
      refresh: expect.any(String),
    });
  });
});
