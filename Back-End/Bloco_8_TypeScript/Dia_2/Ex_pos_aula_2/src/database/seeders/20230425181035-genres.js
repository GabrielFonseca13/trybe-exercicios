'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'genres', 
      [
        {
          genre: 'Fictional Middle Age'
        },
        {
          genre: 'Fictional Wizards'
        },
        {
          genre: 'Financial'
        },
        {
          genre: 'Self Help'
        }
      ], 
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('genres', null, {});
  }
};