'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'books', 
      [
        {
        title: 'Harry Potter e As Reliquias da morte',
        author_id: 2,
        genre_id: 2
        },
        {
          title: 'Senhor dos anéis',
          author_id: 1,
          genre_id: 1
        },
        {
          title: 'Pai rico pai pobre',
          author_id: 3,
          genre_id: 3
        },
        {
          title: 'Seja egosita com sua carreira',
          author_id: 4,
          genre_id: 4
        },
      ], 
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('books', null, {});
  }
};