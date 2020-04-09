const webpack = require('webpack')
// const merge = require('webpack-merge')
// const commonConfig = require("./webpack.common")

const devConfig = {
  mode: 'development',//development 开发环境 production // 生成环境
  devtool: "cheap-module-eval-source-map",// 开发环境
  // devtool: "cheap-module-source-map",// 线上环境
  plugins: [// 插件
    new webpack.HotModuleReplacementPlugin({})
  ],
  // 跑成一个服务
  devServer: {
    contentBase: "./dist",
    open: true,
    hot: true,
    hotOnly: true,// 即使HMR不生效，浏览器也不会自动刷新
    port: "8080",
    // proxy: {// 跨域代理
    //   '/api': 'http://localhost:3000'
    // }
  },
  optimization: {
    usedExports: true,
    splitChunks: {// 代码分割
      chunks: 'all',// all :即处理异步也处理同步
      cacheGroups: {// 缓存
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,// 校验是否在node_modules中,
          filename: 'lodash.js',
          priority: -10 // 数字越大优先级越高
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }

}

// module.exports = merge(commonConfig, devConfig)

module.exports = devConfig