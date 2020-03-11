# EventLoop

> Event Loop即事件循环，是解决javaScript单线程运行阻塞的一种机制

##  EventLoop相关概念

### 1. 堆(Heep)
  > 计算机科学中一类特殊的数据结构的统称,在js中 对象，数据被存放在堆中

### 2. 栈(Stack)
  > 在js中又称为执行栈、调用栈，后进先出的数据结构。Javascript 有一个 主线程（main thread）和 调用栈(或执行栈call-stack)，主线各所有的任务都会被放到调用栈等待主线程执行。当函数执行栈执行完成后，就会从栈顶移出，直到栈内被清空

  ```js
    function foo(b) {
      var a = 5;
      return a + b + 5;
    }

    function bar(x) {
      var y = 1;
      return foo(x * y);
    }

    console.log(bar(6)); // 返回 16
  ```
  当调用`bar`时，node就就把bar进行了压栈。当bar中调用foo时，foo
  也压入调用栈中，执行完foo后，foo弹出调用栈，运行完bar后，bar弹出调用栈，此时程序执行完毕。

### 3. 队列(Queue)

  > 队列即任务队列Task Queue，是一种先进先出的一种数据结构。在队尾添加新元素，从队头移除元素。如下：

  ![img](https://upload-images.jianshu.io/upload_images/15586502-a6e47634fc2cfca3.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/576/format/webp)

## 宏任务和微任务

  > 所有任务分为宏任务（macrotask ）和微任务（microtask ） 两种:
    
  - MacroTask（宏任务）：*  script全部代码、setTimeout、setInterval、setImmediate（浏览器暂时不支持，只有IE10支持，具体可见MDN）、I/O、UI Rendering
  - MicroTask（微任务）：*  Process.nextTick（Node独有）、Promise、Object.observe(废弃)、MutationObserver
  
  - 注意： 在挂起任务时，JS 引擎会将所有任务按照类别分到这两个队列中，首先在 宏任务 的队列中取出第一个任务，执行完毕后取出 微任务 队列中的所有任务顺序执行；之后再取 宏任务，周而复始，直至两个队列的任务都取完。如下
  ![img](https://upload-images.jianshu.io/upload_images/15586502-4f2d3f71a94a4a00.png?imageMogr2/auto-orient/strip|imageView2/2/w/1146/format/webp)

  [宏任务和微任务-参考](https://www.jianshu.com/p/6a1932dbbc95)