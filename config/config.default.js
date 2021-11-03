/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1635921324178_3272';

  // add your middleware config here
  config.middleware = [];

  // 编写 sequelize 配置
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'egg_blog',
  };

  // 跨越配置
  config.security = {
    csrf: {
      enable: true,
      // ignoreJSON: true,
    },
  };
  config.cors = {
    credentials: true,
    // AccessControlAllowCredentials: true,
    // AccessControlAllowOrigin: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
