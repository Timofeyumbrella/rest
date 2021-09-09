module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Permissions", "entity", {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn("Permissions", "entity");
  },
};
