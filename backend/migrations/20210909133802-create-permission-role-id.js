module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Permissions", "roleId", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn("Permissions", "roleId");
  },
};
