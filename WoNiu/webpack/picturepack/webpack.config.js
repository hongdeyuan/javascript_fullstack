const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimazeCssAssetsplugin = require('optimize-css-assets-webpack-plugin')
const UglifyjsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main[hash].js',
    path: path.resolve(__dirname, 'dist')
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
            options: {sourceMap: true}
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
            options: {sourceMap: true}
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        include: [path.resolve(__dirname,'src/')],
        use: ['file-loader',{
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progresssive: true,
              quality: 65
            },
            optipng: {
              enabled: false
            },
            pngquant:{
              quality: '65-90',
              speed: 4
            },
            gifsicle:{
              interlaced: false
            },
            webp: {quality: 75}
          }
        }]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css', // 最终输出的文件名
      chunkFilename: '[id].[hash].css'
    }),
    new OptimazeCssAssetsplugin({}),
    new UglifyjsPlugin({
      cache: true, // js没有变化就不压缩
      parallel: true, // 是否启用并行压缩
      sourceMap: true 
    }),
    new HtmlWebPackPlugin({
      title: 'wn stuby', //生成的文件标题
      filename: 'main.html',
      minify: {// 压缩选项
        collapseWhitespace: true, // 移除空格
        removeComments: true, // 移除注释
        removeAttributeQuotes: true, // 移除双引号
      }
    }),
    new CleanWebpackPlugin()
  ]
}