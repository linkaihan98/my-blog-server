/*
 * @Author: KAAN
 * @Date: 2021-11-12 20:17:35
 * @LastEditors: KAAN
 * @LastEditTime: 2021-11-12 20:26:23
 * @Descripttion: ArticleTags Model （联结模型）
 */

'use strict';

module.exports = app => {
  const { INTEGER } = app.Sequelize;
  const ArticleTags = app.model.define('article_tag', {
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

  // ArticleTags.associate = () => {
  //   app.model.Article.belongsToMany(app.model.Tag, { through: ArticleTags });
  //   app.model.Tag.belongsToMany(app.model.Article, { through: ArticleTags });
  // };

  return ArticleTags;
};
