'use strict';
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let users = JSON.parse(fs.readFileSync('./seeders/users.json','utf8'))
   let usersFix = users.map(user =>{
    const { name,age,gender,email} = user
    return{
      name,
      age,
      gender,
      email,
      createdAt: new Date(),
      updatedAt: new Date(),
     }
   })
   await queryInterface.bulkInsert('Users',usersFix,{})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users',null,{})
  }
};
