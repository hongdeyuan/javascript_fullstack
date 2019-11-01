## 事件模型

  - 捕获 ：

  - 冒泡 ：

  - 三个阶段 ： 捕获阶段   目标阶段   冒泡阶段

  - addEventListener 的第三个参数  默认为 false  冒泡阶段 ； true 为捕获阶段
## 请用 DOM2 级别 的事件
  - DOM0 : onClick 只能绑定一个事件 不可设置冒泡事件 和 捕获事件；属性会覆盖
  - DOM2 : addEventListener ->   只可以设置冒泡事件；可以绑定多个事件
  - DOM3 : addEventListener -> 增加了 很多键盘鼠标事件  只可以设置冒泡事件；可以绑定多个事件

