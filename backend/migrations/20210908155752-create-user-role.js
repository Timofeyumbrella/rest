module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("userRoles", {
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
          model: "Users",
          key: "id",
        },
      },
      permissionId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Users",
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("userRoles");
  },
};
