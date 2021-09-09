module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("Permissions", [
      {
        entity: "event",
        create: "any",
        read: "any",
        update: "any",
        delete: "any",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entity: "event",
        create: "none",
        read: "any",
        update: "none",
        delete: "none",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entity: "user",
        create: "any",
        read: "any",
        update: "any",
        delete: "any",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        entity: "user",
        create: "none",
        read: "own",
        update: "own",
        delete: "own",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Permissions", null, {});
  },
};
