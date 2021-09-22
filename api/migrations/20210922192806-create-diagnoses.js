'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Diagnoses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING
      },
      FK_Pets_Diagnoses: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Pets', key: 'id'}
      },
      FK_People_Diagnoses: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'People', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Diagnoses');
  }
};