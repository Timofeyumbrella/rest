module.exports = {
  up: async (queryInterface) => {
    await queryInterface.dropTable("Accesses");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Accesses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      roleId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Roles",
          key: "id",
        },
      },
      permissionId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Permissions",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
};
