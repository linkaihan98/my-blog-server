'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING, INTEGER } = Sequelize;
    await queryInterface.createTable('tags', {
      id: {
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true,
      },
      name: {
        type: STRING(50),
        defaultValue: null,
      },
      // article_id: {
      //   type: INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'articles',
      //     key: 'id',
      //   },
      // },
      status: {
        type: INTEGER,
        defaultValue: 1,
        comment: '1->正常,2->删除',
      },
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('tags');
  },
};
