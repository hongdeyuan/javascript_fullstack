- 页面支持的是 html ,css ,js 开发标准
    但是近五年来， 前端出现了很多新的 做法 ， 工作流
    css {key:value} stylus 加快  程序化 
    都是由 node 的大火带来的(都是由node来主导的)，
    node init -y   node 后端项目仍有的能力
    stylus : css 
    typescript:js
    组件：html

- npm init -y 
- stylus -w commmon.styl -o common.css
- npm run / npm run compile_stylus

- node 组织开发的方式 工作流
    scripts"{
        "compile_stylus": "stylus -w common.styl -o common.css",
        "start": "live-server"
    }

    -w  -> 占着命令行
    stylus -> css
    css 变化了  刷新页面
    live-server
- width 950 960 1000 PC站 常用布局