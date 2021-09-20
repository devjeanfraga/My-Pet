'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkInsert('Types', [

      {
        type: 'Cachorro',
        createdAt: new Date(),
        updatedAt: new Date() 
      },

      {
        type: 'Gato',
        createdAt: new Date(),
        updatedAt: new Date() 
      },

      {
        type: 'Periquito',
        createdAt: new Date(),
        updatedAt: new Date() 
      },

      {
        type: 'Papagaio',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
 
    await queryInterface.bulkDelete('Types', null, {});
     
  }
};
