module.exports = (sequelize, DataTypes) =>
  sequelize.define("Follow", {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "Users",
        key: "id",
      },
    },
    eventId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "Events",
        key: "id",
      },
    },
  });
