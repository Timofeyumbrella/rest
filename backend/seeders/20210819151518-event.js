const faker = require("faker");

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert(
      "Events",
      new Array(10).fill({}).map(() => ({
        title: faker.company.companyName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        date: faker.date.future(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Events", null, {});
  },
};
