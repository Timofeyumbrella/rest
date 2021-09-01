const bcrypt = require("bcrypt");
const faker = require("faker");

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      "Users",
      new Array(10).fill({}).map(() => ({
        name: faker.name.firstName(),
        age: faker.datatype.number({ min: 12, max: 85 }),
        email: faker.internet.email(),
        gender: faker.name.gender(),
        role: faker.helpers.randomize(["user", "admin"]),
        password: bcrypt.hashSync(faker.internet.password(), 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
    );
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
