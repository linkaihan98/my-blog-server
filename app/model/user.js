/*
 * @Author: KAAN
 * @Date: 2021-11-03 18:42:12
 * @LastEditors: KAAN
 * @LastEditTime: 2021-11-12 20:59:57
 * @Descripttion: User Model
 */

'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const User = app.model.define('users', {
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

  User.associate = () => {
    app.model.User.hasMany(app.model.Article, { foreignKey: 'uid' });
    app.model.User.hasMany(app.model.Draft, { foreignKey: 'uid' });
  };
  
  return User;
};
