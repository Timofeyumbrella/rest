module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define("Permission", {
    roleId: {
      type: DataTypes.INTEGER,
      notNull: true,
    },
    create: {
      type: DataTypes.STRING,
    },
    read: {
      type: DataTypes.STRING,
    },
    update: {
      type: DataTypes.STRING,
    },
    delete: {
      type: DataTypes.STRING,
    },
  });

  return Permission;
};
