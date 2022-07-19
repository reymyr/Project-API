'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('project_devs', [
      {
        projectId: 1,
        developerId: 1,
      }, 
      {
        projectId: 1,
        developerId: 2,
      }, 
      {
        projectId: 3,
        developerId: 4,
      } 
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('project_devs', null, {});
  }
};
