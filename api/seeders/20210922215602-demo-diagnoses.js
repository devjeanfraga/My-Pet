'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Diagnoses', [
      {
        description: 'Pata lesionada',
        FK_Pets_Diagnoses: 1,
        FK_People_Diagnoses: 3,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        description: 'Unhas longas',
        FK_Pets_Diagnoses: 4,
        FK_People_Diagnoses: 3,
        createdAt: new Date(),
        updatedAt: new Date() 
      },

      {
        description: 'Olhos avermelhados',
        FK_Pets_Diagnoses: 2,
        FK_People_Diagnoses: 3,
        createdAt: new Date(),
        updatedAt: new Date() 
      },

      {
        description: 'Diarreia',
        FK_Pets_Diagnoses: 4,
		    FK_People_Diagnoses: 1,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      
      {
        description: 'boca espumando - raiva',
        FK_Pets_Diagnoses: 2,
        FK_People_Diagnoses: 4,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      
      {
        description: 'Enogoliu um pedaço de sapato',
				FK_Pets_Diagnoses: 2,
        FK_People_Diagnoses: 2,
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        description: 'Barulho estranho na barriga',
				FK_Pets_Diagnoses: 2,
        FK_People_Diagnoses: 2,
        createdAt: new Date(),
        updatedAt: new Date() 
      }

  ], {});
    
  },

  down: async (queryInterface, Sequelize) => { 
    await queryInterface.bulkDelete('Diagnoses', null, {});
     
  }
};