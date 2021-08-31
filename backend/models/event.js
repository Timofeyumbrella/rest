module.exports = (sequelize, DataTypes) =>
  sequelize.define("Event", {
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    price: DataTypes.DECIMAL,
    date: DataTypes.DATE,
  });
