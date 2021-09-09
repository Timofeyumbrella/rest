module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Events", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.DECIMAL,
      },
      date: {
        type: Sequelize.DATE,
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
  down: async (queryInterface) => {
    await queryInterface.dropTable("Events");
  },
};
