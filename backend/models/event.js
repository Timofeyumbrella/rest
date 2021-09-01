module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define("Event", {
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

  return Event;
};
