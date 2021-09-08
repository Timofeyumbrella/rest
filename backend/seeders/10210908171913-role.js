module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Roles", [
      { role: "admin", createdAt: new Date(), updatedAt: new Date() },
      { role: "user", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Roles", null, {});
  },
};
