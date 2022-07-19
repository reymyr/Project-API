'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    const password = await bcrypt.hash('admin', 10);
    return queryInterface.bulkInsert('users', [{
      username: 'admin',
      password: password
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
