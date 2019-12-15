## 手写 vue-cli

### 需求
  1. vue init projectName
    - 第一步 是否在当前 目录创建
    - 第二步 下载模板 ，git 仓库
    - 第三步 收集配置： 项目名、项目描述，作者
    - 第四步 生成文件
    #### 生成文件
      模板(template  headerBars)里面  先写好判断

  2. npm init -y

### 相关模块
  - cnpm i download-git-repo -S
  - cnpm i commander -S
  - cnpm i ora -S
  - cnpm i glob -S
  - cnpm i inquirer -S
  - cnpm i handlebars metalsmith -S
  -  cnpm i chalk -S  : 用于 渲染输出字体颜色