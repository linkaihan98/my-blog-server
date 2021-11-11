/*
 * @Author: KAAN
 * @Date: 2021-11-03 17:09:27
 * @LastEditors: KAAN
 * @LastEditTime: 2021-11-12 00:06:11
 * @Descripttion: 后台管理页面Controller
 */
'use strict';

const jwt = require('jsonwebtoken');
const { Success, Fail } = require('../../lib/response_status');
const { generatePassword } = require('../../lib/crypto');
const { SECRET, EXPIRES } = require('../../../config/secretKeys');
const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  /**
   * 登录
   */
  async login() {
    const { ctx } = this;
    ctx.validate({
      username: { type: 'string' },
      password: { type: 'string' },
    });
    const { password } = ctx.request.body;
    const user = await ctx.service.admin.user.findUser(ctx.request.body);
    if (!user) {
      ctx.body = Fail(500, '用户不存在');
    } else if (generatePassword(password) !== user.password) {
      ctx.body = Fail(500, '密码错误，请重新输入');
    } else {
      const token = jwt.sign(
        { uid: user.id, username: user.username },
        SECRET,
        { expiresIn: EXPIRES }
      );
      ctx.cookies.set('_token', token, {
        encrypt: true, // 加密传输
        maxAge: EXPIRES * 1000,
      });
      ctx.body = Success(200, 'Success');
    }
  }

  /**
   * 获取文章分类
   */
  async getArticleType() {
    const { ctx, app } = this;
    const data = await app.mysql.select('article_type');
    ctx.body = {
      code: 1,
      data,
    };
  }
}

module.exports = UserController;
