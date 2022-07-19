'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('developers', [
      {
        id: 1,
        name: 'Reyhan Emyr',
        email: 'reyhanemyr51@gmail.com',
        speciality: 'Backend'
      }, 
      {
        id: 2,
        name: 'Johan',
        email: 'johan@gmail.com',
        speciality: 'Frontend'
      }, 
      {
        id: 3,
        name: 'Jason',
        email: 'jason@gmail.com',
        speciality: 'Frontend'
      }, 
      {
        id: 4,
        name: 'Anan',
        email: 'anan@gmail.com',
        speciality: 'Mobile'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('developers', null, {});
  }
};
