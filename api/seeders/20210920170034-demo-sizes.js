'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Sizes', [
      {
        size:'pequeno',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
  
      {
        size:'médio',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
  
      {
        size:'grande',
        createdAt: new Date(),
        updatedAt: new Date() 
      }
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('Sizes', null, {});

  }
};
