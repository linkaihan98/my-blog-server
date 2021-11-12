'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true,
      },
      username: {
        type: STRING(50),
        allowNull: false,
      },
      password: {
        type: STRING(200),
        allowNull: false,
      },
      created_at: {
        type: DATE,
      },
      updated_at: {
        type: DATE,
      },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
