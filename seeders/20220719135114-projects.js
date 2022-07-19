'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('projects', [
      {
        id: 1,
        name: 'Competition Website',
        description: 'A website for a competition using React and Node.js',
        type: 'Website',
        deadline: '2022-09-19',
      }, 
      {
        id: 2,
        name: 'Organization Website',
        description: 'A website for an organization',
        type: 'Website',
        deadline: '2022-10-25',
      },
      {
        id: 3,
        name: 'Education App',
        description: 'A mobile app for learning',
        type: 'Mobile App',
        deadline: '2023-01-10',
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('projects', null, {});
  }
};
