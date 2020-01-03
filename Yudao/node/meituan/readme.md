## 美团实例
  - npm i express
  - npm install --save-dev @babel/cli @babel/core @babel/preset-env @babel/plugin-syntax-dynamic-import @babel/register @babel/runtime @babel/plugin-transform-runtime

  - node 做后端的
    如何让es6模块化来到 node 开发中：
      1. 使用 @babel/register 和 模块化 需要启动的node代码：
        index.js(@babel/register) + app.js(模块化)
  - 分层controller等
    - router对象 -> controller
      /controller 目录
        /v1/cities.js