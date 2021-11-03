/*
 * @Author: KAAN
 * @Date: 2021-11-03 15:50:56
 * @LastEditors: KAAN
 * @LastEditTime: 2021-11-03 20:09:14
 * @Descripttion: 登录拦截中间件
 */

'use strict';

module.exports = () => {
  return async (ctx, next) => {
    console.log(ctx.session.openId);
    if (ctx.session.openId) {
      await next();
    } else {
      ctx.body = {
        code: 0,
        data: {
          message: '您还没有登录，请登录后再进行操作',
        },
      };
    }
  };
};
