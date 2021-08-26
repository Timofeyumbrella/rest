module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Events", [
      {
        title: "event 1",
        description: "event 1 description",
        price: 867.22,
        date: "08 19 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "event 2",
        description: "event 2 description",
        price: 917.22,
        date: "08 19 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "event 3",
        description: "event 3 description",
        price: 383.22,
        date: "08 19 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "event 4",
        description: "event 4 description",
        price: 403.22,
        date: "08 19 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "event 5",
        description: "event 5 description",
        price: 504.22,
        date: "08 19 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "event 6",
        description: "event 6 description",
        price: 103.22,
        date: "08 19 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "event 7",
        description: "event 7 description",
        price: 323.22,
        date: "08 19 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "event 8",
        description: "event 8 description",
        price: 803.22,
        date: "08 19 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "event 9",
        description: "event 9 description",
        price: 3035.22,
        date: "08 19 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "event 10",
        description: "event 10 description",
        price: 3203.22,
        date: "08 19 2021",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Events", null, {});
  },
};
