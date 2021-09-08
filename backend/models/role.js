module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define("Role", {
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Role;
};
