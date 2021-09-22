'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Pets', [
      {
        name: 'Ivi',
        breed: 'poodle gigante',
        age: 6,
        weight: '35kg',
        sex: 'm',
        owner_ID: 4,
        type_ID: 1,
        size_ID: 3,
        createdAt: new Date(),
        updatedAt: new Date()  
      },

      {
        name: 'Stanley',
        breed: 'Shar-pei',
        age: 4,
        weight: '27kg',
        sex: 'f',
        owner_ID: 2,
        type_ID: 1,
        size_ID: 2,
        createdAt: new Date(),
        updatedAt: new Date() 
      },

      {
        name: 'Venus',
        breed: 'agaponis',
        age: 2,
        weight: '300g',
        sex: 'm',
        owner_ID: 3,
        type_ID: 3,
        size_ID: 1,
        createdAt: new Date(),
        updatedAt: new Date() 
      },

      {
        name: 'Saturno',
        breed: 'Siberiano',
        age: 7,
        weight: '5kg',
        sex: 'f',
        owner_ID: 3,
        type_ID: 2,
        size_ID: 2,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkDelete('Pets', null, {});
    
  }
};
