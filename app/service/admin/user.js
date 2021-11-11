/*
 * @Author: KAAN
 * @Date: 2021-11-11 17:42:19
 * @LastEditors: KAAN
 * @LastEditTime: 2021-11-12 00:07:23
 * @Descripttion: user service
 */
'use strict';

const Service = require('egg').Service;

class User extends Service {
  async findUser(data) {
    const { username } = data;
    return this.ctx.model.User.findOne({
      where: { username },
    });
  }
}

module.exports = User;
