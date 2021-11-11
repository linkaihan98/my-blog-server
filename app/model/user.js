/*
 * @Author: KAAN
 * @Date: 2021-11-03 18:42:12
 * @LastEditors: KAAN
 * @LastEditTime: 2021-11-11 17:53:09
 * @Descripttion: User Model
 */

'use strict';

module.exports = app => {
  const { INTEGER, DATE, STRING } = app.Sequelize;

  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true },
    username: STRING(30),
    password: STRING(200),
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};
