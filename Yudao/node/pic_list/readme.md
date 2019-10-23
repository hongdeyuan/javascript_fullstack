# Restful web
  1. 一切皆资源
  2. DOM + CSS + JS
  3. URL: Universal Resource Location 统一资源定位符
  4. http://taobao.com/shop/good/2 ：明确表达 它的资源是什么意思？

# npm init -y : 从前端， 加入后端
  scripts 执行一些命令
  json-server  相当于 npm 包
  json 资源 restful 
  - 语义化的url
  :1314/posts GET 文章列表
  :1314/posts/:id  详情

  GET url 明文访问
  POST 用于 新增数据
  PUT 用于 修改数据
  PATCH   用于 修改数据 
  DELETE 删除数据
  OPTIONS

  url + 谓语动词

  - PUT && PATCH  考点
    PUT : 覆盖性修改(覆盖修改)
    PATCH : 只修改某个key值(部分修改)

  - :8080 live-server web 页面
    :1314 启动了后端API (json-server)
    不同的端口代表了不同的服务
    前后端 全栈 