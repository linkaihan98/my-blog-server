'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { STRING, INTEGER, TEXT } = Sequelize;
    await queryInterface.createTable('drafts', {
      id: {
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true,
      },
      title: {
        type: STRING,
        defaultValue: null,
        comment: '正文内容',
      },
      uid: {
        type: INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      abstract: {
        type: STRING(500),
        defaultValue: null,
      },
      cover: {
        type: STRING,
        defaultValue: null,
        comment: '封面图片',
      },
      content: {
        type: TEXT,
        defaultValue: null,
        comment: '正文内容',
      },
      html: {
        type: TEXT,
        defaultValue: null,
        comment: 'html内容',
      },
      markdown: {
        type: TEXT,
        defaultValue: null,
        comment: 'markdown内容',
      },
      article_count: {
        type: INTEGER,
        defaultValue: 0,
        comment: '字数',
      },
      status: {
        type: INTEGER,
        defaultValue: 1,
        comment: '1->正常,2->删除',
      },
      category_id: {
        type: INTEGER,
        defaultValue: null,
        references: {
          model: 'categories',
          key: 'id',
        },
      },
      tag_id: {
        type: INTEGER,
        defaultValue: null,
      },
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('drafts');
  },
};
