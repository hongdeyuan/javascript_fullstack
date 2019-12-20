## webpack
  - npm i webpack webpack-cli --save-dev
  - npm i lodash --save-dev
  - npm init -y
  - npx webpack
  - npm i style-loader css-loader --save-dev
  - npm i sass-loader node-sass --save-dev
  - npm i postcss-loader autoprefixer --save-dev // 给css添加前缀
  - autoprefixer : 进行浏览器的 部分兼容补全
  - npm i mini-css-extract-plugin --save-dev

  - dist 存放打包之后文件
  - src 存放入口文件
  - webpack.config.js // webpack的排位置文件

## webpack 常用模块(module)
  - 用来 绝对如何处理项目中方的不同类型模块
  - webpack 模块支持语法：
    - es6 import语法
    - Commonjs require() 语法
    - AMD define


## 抽取样式将css打包