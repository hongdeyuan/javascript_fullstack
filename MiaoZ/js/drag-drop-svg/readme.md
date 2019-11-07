## 浏览器解析过程
  - 浏览器收到 html 解析为 DOM 
  - 遇到 CSS 解析为 CSSOM
  - 把DOM CSSOM 合在一起 生成 一棵 渲染树
  - 根据 样式 计算位置 开始渲染 布局

  - domcontentLoaded 就是当 html 解析完之后发生

  - 有一些标签 img link script 会 引入 外部资源， 会在 解析完html 之后 ，开始请求资源