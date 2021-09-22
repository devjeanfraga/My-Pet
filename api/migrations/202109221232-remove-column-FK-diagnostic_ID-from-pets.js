'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Pets','diagnostic_ID');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Pets', 'diagnostic_ID', {
        diagnostic_ID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Diagnoses', key: 'id'}
      }
    });
  }
};