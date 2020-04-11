# 手写一个loader
  loader就是一个函数，声明式函数，但是不能使用箭头函数，拿到源代码做进一步的修饰处理，
  再返回处理后的的源码就可以了

  - loader-utils

# 如何编写一个 Plugins
  > plugin :开始打包，在某一时刻，帮助我们处理一些事情的机制
  设计模式：
    事件驱动
    发布订阅

  plugin是一个类，里面包含一个apply函数，接受一个参数，compiler


# webpack 编译原理 