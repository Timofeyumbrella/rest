const bcrypt = require("bcrypt");
const faker = require("faker");

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Timofey",
        age: 18,
        email: "timfrommit@gmail.com",
        gender: "gachi remix",
        password: bcrypt.hashSync("Timofey228", 10),
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Anton",
        age: 18,
        email: "anton@gmail.com",
        gender: "full master",
        password: bcrypt.hashSync("Anton700", 10),
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
