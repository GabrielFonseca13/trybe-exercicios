'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Harry Potter e as Reliquias da Morte',
        author: 'J. K. Rowlling',
        page_quantity: 616,
        created_at: new Date('2022-01-28T13:23:32.514Z'),
        updated_at: new Date('2022-01-28T13:23:32.514Z'),
      },
      {
        title: 'O Senhor dos anéis o retorno do rei',
        author: 'J. R. R. Tolkien',
        page_quantity: 813,
        created_at: new Date('2022-01-28T04:51:32.514Z'),
        updated_at: new Date('2022-01-28T04:51:32.514Z'),
      },
      {
        title: 'A Dança da Morte',
        author: 'Stephen King',
        page_quantity: '1248',
        created_at: new Date('2022-01-28T19:37:32.514Z'),
        updated_at: new Date('2022-01-28T19:37:32.514Z'),
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
