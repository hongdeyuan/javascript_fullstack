const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './build')
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/, //匹配文件
      //   use: ['style-loader', 'css-loader'] //指明使用什么加载器
      // },
      // {
      //   test: /\.scss$/, //匹配文件
      //   use: ['style-loader', 'css-loader', 'sass-loader'] //指明使用什么加载器
      // },
      {
        test: /\.(sc|c|sa)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: loader => [
                require('autoprefixer')(),
                // 这里还能引入更多别的插件
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.js$/, //匹配文件
        exclude: /node_modules/,// 排除node_modules的js
        use: {
          loader: 'babel-loader'
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
          //   "plugins": [
          //     [
          //       "@babel/plugin-transform-runtime",
          //       {
          //         "absoluteRuntime": false,
          //         "corejs": 2,
          //         "helpers": true,
          //         "regenerator": true,
          //         "useESModules": false,
          //         "version": "7.0.0-beta.0"
          //       }
          //     ]
          //   ]
          // }
        } //指明使用什么加载器
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css', // 最终输出的文件名
      chunkFilename: '[id].css'
    })
  ]
}
