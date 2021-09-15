module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Permissions", "entity"),
      queryInterface.removeColumn("Permissions", "read"),
      queryInterface.removeColumn("Permissions", "delete"),
      queryInterface.addColumn("Permissions", "find", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("Permissions", "findAll", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("Permissions", "destroy", {
        type: Sequelize.STRING,
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Permissions", "entity", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("Permissions", "read", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("Permissions", "delete", {
        type: Sequelize.STRING,
      }),
      queryInterface.removeColumn("Permissions", "find"),
      queryInterface.removeColumn("Permissions", "findAll"),
      queryInterface.removeColumn("Permissions", "destroy"),
    ]);
  },
};
