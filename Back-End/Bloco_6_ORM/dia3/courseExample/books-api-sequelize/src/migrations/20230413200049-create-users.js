'use strict';

module.exports = {
  up: async (queryInterface, sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER,
      },
      first_name: {
        allowNull: false,
        type: sequelize.STRING,
      },
      last_name: {
        allowNull: false,
        type: sequelize.STRING,
      },
     age: {
        allowNull: false,
        type: sequelize.INTEGER,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('users');
  }
};
