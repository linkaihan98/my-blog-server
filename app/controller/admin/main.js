/*
 * @Author: KAAN
 * @Date: 2021-11-03 17:09:27
 * @LastEditors: KAAN
 * @LastEditTime: 2021-11-03 20:16:35
 * @Descripttion: 后台管理页面Controller
 */
'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  /**
   * 用户登录
   */
  async login() {
    const { ctx } = this;
    // const { username, password } = ctx.request.body;

    const user = await ctx.model.User.findOne(ctx.request.body);
    // console.log(user, 'user');

    if (user) {
      // 登录成功,进行session缓存
      const openId = new Date().getTime();
      ctx.session.openId = { openId };
      ctx.body = {
        code: 1,
        data: {
          openId,
        },
      };
    } else {
      ctx.body = {
        code: 0,
        data: {
          title: '登录失败',
          message: '用户名或密码错误',
        },
      };
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

module.exports = MainController;
