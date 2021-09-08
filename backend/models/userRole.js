module.exports = (sequelize, DataTypes) => {
  const userRole = sequelize.define("UserRole", {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "Users",
        key: "id",
      },
    },
    permissionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "Users",
        key: "id",
      },
    },
  });

  return userRole;
};
