module.exports = (sequelize, DataTypes) =>
  sequelize.define("Follow", {
    UserId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "Users",
        key: "id",
      },
    },
    EventId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "Events",
        key: "id",
      },
    },
  });
