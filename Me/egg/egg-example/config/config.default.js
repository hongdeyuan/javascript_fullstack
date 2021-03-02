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
  config.keys = appInfo.name + '_1611757749527_6712';

  // add your middleware config here
  config.middleware = [];

  config.saltRounds = 10;

  config.sequelize = {
    dialect: 'postgres',
    database: 'diary',
    host: '127.0.0.1',
    port: '5432',
    username: 'postgres',
    password: 'postgres',
    pool: {
      max: 10, // 连接池中最大连接数量
      min: 0, // 连接池中最小连接数量
      idle: 10000, // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
    },
  };

  config.initialUser = {
    name: 'admin',
    password: 'admin',
  };

  exports.security = {
    csrf: false
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
