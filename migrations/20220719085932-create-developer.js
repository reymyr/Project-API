'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('developers', {
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
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate: {
            notEmpty: true,
            isEmail: true
          }
        },
        speciality: {
          type: Sequelize.STRING,
        }
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('developers');
  }
};
