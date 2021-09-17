const { User } = require("../../models");

describe("User Controller", () => {
  test("getting all users", async () => {
    const users = await User.findAll();

    expect(users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          age: expect.any(Number),
          email: expect.any(String),
          gender: expect.any(String),
          password: expect.any(String),
          roleId: expect.any(Number),
        }),
      ])
    );
  });

  test("getting a user", async () => {
    const user = await User.findOne({ where: { email: "dummy@gmail.com" } });

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

  test("updating a user", async () => {
    const user = await User.findOne({ where: { email: "dummy@gmail.com" } });

    await user.update({
      name: "notdummy",
      age: 18,
      email: "notdummy@gmail.com",
      gender: "stillhelicopter",
      password: "$2b$10$eNIrh3LNJvIAJABQ/blphe9b42f9Ilhus9Mu21kFaF7VqkscTIk4e",
      roleId: 1,
    });

    expect(user).toMatchObject({
      id: expect.any(Number),
      name: "notdummy",
      age: 18,
      email: "notdummy@gmail.com",
      gender: "stillhelicopter",
      password: "$2b$10$eNIrh3LNJvIAJABQ/blphe9b42f9Ilhus9Mu21kFaF7VqkscTIk4e",
      roleId: 1,
    });
  });

  test("deleting a user", async () => {
    const user = await User.findOne({ where: { email: "notdummy@gmail.com" } });

    await user.destroy();

    expect(user).toMatchObject({
      id: expect.any(Number),
      name: "notdummy",
      age: 18,
      email: "notdummy@gmail.com",
      gender: "stillhelicopter",
      password: "$2b$10$eNIrh3LNJvIAJABQ/blphe9b42f9Ilhus9Mu21kFaF7VqkscTIk4e",
      roleId: 1,
    });
  });
});
