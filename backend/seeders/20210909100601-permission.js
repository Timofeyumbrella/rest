module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("Permissions", [
      {
        create: "any",
        findAll: "any",
        find: "any",
        update: "any",
        destroy: "any",
        roleId: 1,
        entity: "event",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        create: "none",
        findAll: "any",
        find: "any",
        update: "none",
        destroy: "none",
        roleId: 2,
        entity: "event",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        create: "any",
        findAll: "any",
        find: "any",
        update: "any",
        destroy: "any",
        roleId: 1,
        entity: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        create: "none",
        findAll: "none",
        find: "own",
        update: "own",
        destroy: "own",
        roleId: 2,
        entity: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Permissions", null, {});
  },
};
