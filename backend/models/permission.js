module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define("Permission", {
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
