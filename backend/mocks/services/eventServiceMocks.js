module.exports = {
  create: {
    id: 23742,
    title: "test event title",
    price: 324.3,
    description: "test event description",
    date: new Date("2021-09-05").toISOString(),
  },

  findAll: [
    {
      id: 32433,
      title: "test event title",
      price: 324.3,
      description: "test event description",
      date: new Date("2022-07-05").toISOString(),
    },
    {
      id: 32419,
      title: "test event title",
      price: 324.3,
      description: "test event description",
      date: new Date("2022-07-09").toISOString(),
    },
    {
      id: 94721,
      title: "test event title",
      price: 324.3,
      description: "test event description",
      date: new Date("2022-07-01").toISOString(),
    },
    {
      id: 87201,
      title: "test event title",
      price: 324.3,
      description: "test event description",
      date: new Date("2022-01-05").toISOString(),
    },
    {
      id: 71232,
      title: "test event title",
      price: 323.3,
      description: "test event description",
      date: new Date("2022-08-01").toISOString(),
    },
  ],

  findOne: {
    id: 90188,
    title: "test event title",
    price: 789.3,
    description: "test event description",
    date: new Date("2019-06-11").toISOString(),
  },

  update: {
    id: 87033,
    title: "updated event title",
    price: 3241.52,
    description: "updated event description",
    date: new Date("2018-09-11"),
  },

  destroy: {
    id: 12301,
    title: "destroyed event title",
    price: 3241.52,
    description: "destroyed event description",
    date: new Date("2017-09-10"),
  },
};
