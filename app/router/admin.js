/*
 * @Author: KAAN
 * @Date: 2021-11-03 16:51:23
 * @LastEditors: KAAN
 * @LastEditTime: 2021-11-03 20:03:13
 * @Descripttion: 后台管理页面路由配置
 */

'use strict';

module.exports = app => {
  const { router, controller } = app;

  // 登录拦截中间件
  // const userInterceptor = app.middleware.userInterceptor();

  router.get('/admin/index', controller.admin.main.index); // 测试
  router.post('/api/admin/login', controller.admin.main.login); // 登录接口
};
