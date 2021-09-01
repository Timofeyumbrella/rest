module.exports = (sequelize, DataTypes) =>
  sequelize.define("Follow", {
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
    },
    EventId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Events",
        key: "id",
      },
    },
  });
