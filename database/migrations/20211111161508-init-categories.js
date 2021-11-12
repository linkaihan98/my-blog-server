'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING, INTEGER } = Sequelize;
    await queryInterface.createTable('categories', {
      id: {
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true,
      },
      name: {
        type: STRING(50),
        defaultValue: null,
      },
      status: {
        type: INTEGER,
        defaultValue: 1,
        comment: '1->正常,2->删除',
      },
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('categories');
  },
};
