module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define("Permission", {
    create: {
      type: DataTypes.STRING,
    },
    find: {
      type: DataTypes.STRING,
    },
    findAll: {
      type: DataTypes.STRING,
    },
    update: {
      type: DataTypes.STRING,
    },
    destroy: {
      type: DataTypes.STRING,
    },
  });

  return Permission;
};
