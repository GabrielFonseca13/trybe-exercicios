'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'authors', 
      [
        {
        name: 'J.R.R Tolkien'
        },
        {
          name: 'J.K. Rowlling'
        },
        {
          name: 'Robert Kyosaki'
        },
        {
          name: 'Luciano Santos'
        }
      ], 
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('authors', null, {});
  }
};
