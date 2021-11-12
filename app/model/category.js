/*
 * @Author: KAAN
 * @Date: 2021-11-12 20:17:01
 * @LastEditors: KAAN
 * @LastEditTime: 2021-11-12 20:33:58
 * @Descripttion: 
 */

'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const Category = app.model.define('categories', {
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

  Category.associate = () => {
    app.model.Category.hasMany(app.model.Article, { foreignKey: 'category_id' });
  };

  return Category;
};
