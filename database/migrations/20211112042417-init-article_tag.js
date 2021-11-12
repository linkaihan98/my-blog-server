'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER } = Sequelize;
    await queryInterface.createTable('article_tag', {
      article_id: {
        type: INTEGER,
        references: {
          model: 'articles',
          key: 'id',
        },
      },
      tag_id: {
        type: INTEGER,
        references: {
          model: 'tags',
          key: 'id',
        },
      },
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('article-tags');
  },
};
