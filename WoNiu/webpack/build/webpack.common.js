const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const webpack = require('webpack')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')
const merge = require('webpack-merge')

const commmonConfig = {
  entry: {
    // lodash: "./src/lodash.js",
    index: "./src/index.js"
  }, // 指定打包的入口文件
  output: {// 指定打包后的资源位置
    // 公共路径设置
    // publicPath: "https://cdn.biadu.com",
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js"
  },
  module: {
    // 遇到不认识的模块，就在这里找loader
    rules: [
      {
        test: /\.jpg$/,
        use: {
          // url-loader 可以限制模块的体积，根据体积判断是否需要转换base64格式
          loader: "url-loader",// 就是把模块，放在了另一个目录里，并且把位置
          options: {
            // name 打包前模块的名称，ext是打包前的模块格式
            name: "[name]_[hash].[ext]",// test.jpg
            outputPath: 'images/', // 输出路径
            limit: 240000,// 图片大小临界值，当小于直接以base64格式
          },
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', "css-loader", "postcss-loader"]

        // use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.scss$/,// loader是有顺序的, 从后往前
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: {
          //   // "presets": [
          //   //   [
          //   //     "@babel/preset-env",
          //   //     {
          //   //       useBuiltIns: "usage",// 按需加载
          //   //       corejs: 2
          //   //     }
          //   //   ]
          //   // ],
          //   "plugins": [["@babel/plugin-transform-runtime"]]
          // }
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
    ]
  },
  plugins: [// 插件
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "标题自己取de",
      filename: "index.html"
    }),
    // 打包 前把上一次生成的目录删掉
    new CleanWebpackPlugin(),

    // 把css单独打包成一个文件
    // new MiniCssExtractPlugin({
    //   filename: "[name].css"
    // })
  ],
}

module.exports = env => {
  if (env && env.production) {
    return merge(commmonConfig, prodConfig)
  } else {
    return merge(commmonConfig, devConfig)
  }
}