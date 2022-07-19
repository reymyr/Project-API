'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('project_devs', {
        projectId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: { model: 'projects', key: 'id' }
        },
        developerId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: { model: 'developers', key: 'id' }
        }
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('project_devs');
  }
};
