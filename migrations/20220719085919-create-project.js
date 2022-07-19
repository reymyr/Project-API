'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('projects', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true 
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: true
          }
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: true
          }
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: true
          }
        },
        deadline: {
          type: Sequelize.DATE,
          allowNull: false,
          validate: {
            notEmpty: true
          }
        }
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('projects');
  }
};
