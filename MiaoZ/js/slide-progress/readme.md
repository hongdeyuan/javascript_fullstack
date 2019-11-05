# 进度条拖拽
  - 构建DOM结构
  - 写好渲染样式
  - 编写 js 交互
  - 给新增的 标签添加 类名
     this.progress.classList.add('progress');
  - 给一个标签 添入一个标签 
    this.progressBar.appendChild(this.progress);
  - 创建标签 
     document.createElement('div')
  - 设置 类型转换 设置 默认值
    parseInt(this.progressButton.style.left || 0);
  - 拖动事件 
    addEventListener  ：touchstart / touchmove / touchend 
  - 拖动事件 的相关 参数获取
    - 获取拖动的 X 轴距离 ： touch.clientX
  - 获得某个 标签的 宽高
    progressBar.offsetWidth
  - 设置某个标签的 样式宽高
    progress.style.width progress.style.height
    progress.style.left progress.style.top
    progress.style.backgourndColor  progress.style.src
  - 类的形式(组件式) 编写前端 js ，提高复用性