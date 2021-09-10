module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Accesses", [
      {
        roleId: 1,
        permissionId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 1,
        permissionId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 2,
        permissionId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleId: 2,
        permissionId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Accesses", null, {});
  },
};
