'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('users_books', {
      user_id:{
        type: sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        },
      book_id:{
        type: sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'books',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users_books');
  }
};
