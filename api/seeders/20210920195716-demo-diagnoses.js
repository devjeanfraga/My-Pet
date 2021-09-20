'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Diagnoses', [
      {
        description: 'Pata lesionada',
        ownerPet_ID: 3,
        createdAt: new Date(),
        updatedAt: new Date() 
      },

      {
        description: 'Olhos avermelhados',
        ownerPet_ID: 3,
        createdAt: new Date(),
        updatedAt: new Date() 
      },

      {
        description: 'Diarreia',
        ownerPet_ID: 1,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      
      {
        description: 'boca espumando - raiva',
        ownerPet_ID: 4,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      
      {
        description: 'Unhas grandes demais',
        ownerPet_ID: 2,
        createdAt: new Date(),
        updatedAt: new Date() 
      },

  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    
    
    await queryInterface.bulkDelete('Diagnoses', null, {});
     
  }
};
