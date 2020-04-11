const path = require('path')
// const CopyrightWebpackPlugin = require('./plugins/copyright-webpack-plugin')
module.exports = {
  mode: "development",
  entry: {
    main: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  resolveLoader: {
    modules: ["node_modules", "./loader"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "replace-loader"
          },
          {
            loader: "replace-loaderAsync",
            options: {
              name: 'dh'
            }
          }
        ]
      }
    ]
  },
  // plugin: [
  //   new CopyrightWebpackPlugin()
  // ]
}