'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable(
      'books', 
      { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        author_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          foreignKey: true,
          field: 'author_id',
          references: {
            model: 'authors',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        genre_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          foreignKey: true,
          field: 'genre_id',
          references: {
            model: 'genres',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      }
    );
  
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('books');
  }
};