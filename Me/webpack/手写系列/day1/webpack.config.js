const path = require('path')
module.exports = {
  mode: "development",
  entry: {
    main: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: path.resolve(__dirname, "./loader/replace-loader.js"),
          options: {
            name: 'dh'
          }
        }
      }
    ]
  }
}