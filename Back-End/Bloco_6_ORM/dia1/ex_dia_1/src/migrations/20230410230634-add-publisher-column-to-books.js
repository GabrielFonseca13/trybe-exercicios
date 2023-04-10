'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Books', 'publisher', {
      allowNull: true,
      type: sequelize.STRING,
      after: 'page_quantity'
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.removeColumn('Books', 'publisher');
  }
};
