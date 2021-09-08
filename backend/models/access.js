module.exports = (sequelize, DataTypes) => {
  const Access = sequelize.define("Access", {
    roleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "Roles",
        key: "id",
      },
    },
    permissionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "Permissions",
        key: "id",
      },
    },
  });

  return Access;
};
