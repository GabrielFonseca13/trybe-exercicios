'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: sequelize.STRING,
      },
      release_year: {
        allowNull: false,
        type: sequelize.INTEGER,
      },
      total_pages: {
        allowNull: false,
        type: sequelize.INTEGER,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('books');
  }
};
