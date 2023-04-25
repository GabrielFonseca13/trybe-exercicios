'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable(
      'genres', 
      { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        genre: {
          type: Sequelize.STRING,
          allowNull: false,
        }
      }
    );
  
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('genres');
  }
};