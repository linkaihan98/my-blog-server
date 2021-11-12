/*
 * @Author: KAAN
 * @Date: 2021-11-12 19:53:07
 * @LastEditors: KAAN
 * @LastEditTime: 2021-11-12 20:33:08
 * @Descripttion: Draft Model
 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;

  const Draft = app.model.define('drafts', {
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
    },
    tag_id: {
      type: INTEGER,
      defaultValue: null,
    },
  });

  Draft.associate = () => {
    app.model.Draft.belongsTo(app.model.User);
    app.model.Draft.belongsTo(app.model.Category);
  };

  return Draft;
};
