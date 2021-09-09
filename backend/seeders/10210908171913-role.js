module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("Roles", [
      { role: "admin", createdAt: new Date(), updatedAt: new Date() },
      { role: "user", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Roles", null, {});
  },
};
