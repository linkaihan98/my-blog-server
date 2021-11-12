/*
 * @Author: KAAN
 * @Date: 2021-11-12 20:16:46
 * @LastEditors: KAAN
 * @LastEditTime: 2021-11-12 20:17:58
 * @Descripttion: Tag Model
 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const Tag = app.model.define('tags', {
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

  Tag.associate = () => {
    app.model.Tag.belongsToMany(app.model.Article, { through: 'ArticleTags' });
  };

  return Tag;
};
