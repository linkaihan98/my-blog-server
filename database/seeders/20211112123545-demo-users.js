'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('users', [{
      username: '123',
      password: '123456',
    }]);
  },
  down: queryInterface => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
