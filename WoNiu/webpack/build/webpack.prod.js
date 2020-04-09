// const merge = require('webpack-merge')
// const commonConfig = require("./webpack.common")

const prodConfig = {
  mode: 'production',//development 开发环境 production // 生成环境
  // devtool: "cheap-module-eval-source-map",// 开发环境
  devtool: "cheap-module-source-map",// 线上环境
}

// module.exports = merge(commonConfig, prodConfig)

module.exports = prodConfig