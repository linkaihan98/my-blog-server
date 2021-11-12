/*
 * @Author: KAAN
 * @Date: 2021-11-12 19:51:39
 * @LastEditors: KAAN
 * @LastEditTime: 2021-11-12 20:33:50
 * @Descripttion: Article Model
 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;
  const Article = app.model.define('articles', {
    id: {
      primaryKey: true,
      type: INTEGER,
      autoIncrement: true,
    },
    title: {
      type: STRING,
      defaultValue: null,
      comment: '文章标题',
    },
    uid: {
      type: INTEGER,
      allowNull: false,
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
    anchor: {
      type: TEXT,
      defaultValue: null,
      comment: 'anchor',
    },
    article_count: {
      type: INTEGER,
      defaultValue: 0,
      comment: '字数',
    },
    view: {
      type: INTEGER,
      defaultValue: 0,
      comment: '查看数',
    },
    status: {
      type: INTEGER,
      defaultValue: 1,
      comment: '1->正常,2->删除',
    },
    category_id: {
      type: INTEGER,
      allowNull: false,
    },
    tag_id: {
      type: INTEGER,
      allowNull: false,
    },
  });

  Article.associate = () => {
    app.model.Article.belongsTo(app.model.User);
    app.model.Article.belongsTo(app.model.Category);
    app.model.Article.belongsToMany(app.model.Tag, { through: 'ArticleTags', });
  };

  return Article;
};
