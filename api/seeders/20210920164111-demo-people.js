'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkInsert('People', [
      {
        name: 'John Doe',
        phone: '21986547251',
        email:'jhon@jhon.com',
        active:true,
        appointment:true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Maria Helena',
        phone: '21986547251',
        email:'maria@maria.com',
        active:true,
        appointment:false,
        createdAt: new Date(),
        updatedAt: new Date() 
      },

      {
        name: 'Joaquim',
        phone: '21986547251',
        email:'joaquim@joaquim.com',
        active:true,
        appointment:false,
        createdAt: new Date(),
        updatedAt: new Date() 
      },

      {
        name: 'Hilton Baldacino',
        phone: '21986547251',
        email:'hilton@hilton.com',
        active:false,
        appointment:false,
        createdAt: new Date(),
        updatedAt: new Date() 
      }
  ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
    
    //Add commands to revert seed here.
        
    await queryInterface.bulkDelete('People', null, {});
     
  }
};
