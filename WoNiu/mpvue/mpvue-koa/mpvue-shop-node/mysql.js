// 基础配置
const configs = require('./config')

var knext = require('knext')({
  client: 'mysql',
  connection: {
    host: configs.mysql.host,
    port: configs.mysql.port,
    user: configs.mysql.user,
    password: configs.mysql.pass,
    database: configs.mysql.db
  },
})

// 将基础的sdk.config合并 导出初始化完成的sdk
module.exports = { mysql: knext }