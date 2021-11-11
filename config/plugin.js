'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   static: {
//     enable: true,
//   }
// };

// 引入 egg-sequelize 插件
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

// 路由分组插件
exports.routerPlus = {
  enable: false,
  package: 'egg-router-plus',
};

//  validate 插件
exports.validate = {
  enable: true,
  package: 'egg-validate',
};
