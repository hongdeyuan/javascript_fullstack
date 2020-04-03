## 一面  2-21  36min
1. 实习项目，难点，如何解决

2. 输入url到页面展示发生了什么？
  答： 略

3. link标签会阻塞DOM的解析吗？script呢？
  答：
    - link: 它并不会阻塞dom tree的生成，但是会阻塞paint（也有可能是render tree）,个人理解，应该是link阻止了css tree,从而导致paint延迟

    - script： 这个标签肯定是会阻塞dom解析的，假如浏览器遇到它，会下载它并执行里面的内容，才去继续解析下面的dom，解决办法有两个，一是在script标签上加上async,一是使用createElement动态创建DOM元素

    [参考](https://www.jianshu.com/p/510d81a8aad2)

4. 回流和重绘的触发条件？如何优化动画？
    答： 
      - 回流： 字体大小；元素添加/删除；hover;元素位置，宽高等改变
      - 重绘：color;background-color的改变

      - 如何优化动画
        1. will-change: 提前通知浏览器元素将要做什么动画，让浏览器提前准备合适的优化设置
        2. 通过GPU硬件加速:transform:transition3d(0,0,0)或-webkit-transform:translateZ(0)

5、let const var区别
  答： 
    - let 不可变量提升；不能重复定义；不需要初始值；块级作用域
    - const 不可变量提升； 不能重复定义；需要初始值； 块级作用域
    - var 变量提升；可重复定义；不需要初始值；除块级作用域

6、讲一讲js的执行上下文
  答： 略
  [参考](https://blog.csdn.net/qqchenyufei/article/details/82795713)

7、作用域链形成过程？
  答：
    1. 逐层衍生、逐层嵌套的作用域，从而形成作用域链

8、webpack构建过程？出现循环引用呢？如何优化构建速度
  答：  就比如html中打包图片
        首先设置 入口文件： entry, 在output中设置出口路径和名字：path, filename
        接着： module: rules :在rules中test：设置打包图片的格式，当然这里需要借助loader来进行打包，你可以采用file-loader来打包，如果你想设置图片相关内容：比如图片名称(name: [name][hash].[ext])，输出路径(outputPath)等
        最后，运行打包之后，你就可以在更目录下看到自己打包出的内容
        ；
        当然，在图片打包时，你也可以使用url-loader,直接将图片转成base64格式在你打包的index.js中;如果你想限制大小来决定是base64，还是图片文件，你可以通过limit来绝对

9、了解babel吗？
  答：略

10、requestAnimationFrame
  答： 
  [参考一](https://juejin.im/post/5e621f5fe51d452700567c32#heading-13)
  [参考二](https://juejin.im/post/5b6020b8e51d4535253b30d1)

11、数组求和递归怎么求？
  答： 
  ```js
  let arr = [1, 2, 3, 4]
  function dp(arr){
    if(arr.length <= 1){
      return arr[0]
    }
    return arr.shift() + dp(arr)
  }
  ```
  优化：缓存+ 闭包

12、水平垂直居中？
  答： 
    1. flex + align-items + justify-content
    2. position: absolute + top:50% + left: 50%; transform: translate(-50%, -50%)
    3. absolute + margin: auto + top, left, right,bottom: 0
    4. 父级：display:table; 
        子集： display: table-cell; text-align:center; vertical-align: middle;
    5. dispaly: gird; align-self: center; justify-self:center;


13、css选择器有哪些？权重呢？
  浏览器默认属性 < 继承自父元素的属性 < 通配符选择器(*) < 标签选择器(p, div,img等) < 类选择器('.box') < 结构伪类选择器(:first-child; nth-child(n);nth-last-child(n); :root ) < id选择器('#pwd') < 行内样式 < !important

反问：如何评价我的表现

二面 2-28
1、打开github问我每个项目的情况
  答： 略
2、websocket？有哪些opcode？掩码作用，心跳机制如何设计？
  答： 不知

3、按需加载怎么做？如何在巨量DOM的情况下优化？
  答： react使用react-loadable进行按需加载
      加载巨量DOM；可以setTimeout,每次增加指定数量dom元素，直到全部添加完为止

4、无限滚动

  [参考](https://segmentfault.com/a/1190000004974824)

5、实习做的项目
  答： 略

6、react的setState，同步异步？

  - setState 只在合成事件和钩子函数中是“异步”的，在原生事件和 setTimeout 中都是同步的。
  - setState的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。

  - setState 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次 setState ， setState 的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时 setState 多个不同的值，在更新时会对其进行合并批量更新。

7、React.memo原理
  答： 略

8、前端如何做图片压缩？

  答： 主要思想是：首先求出上传的图片大小，然后判断是否大于限制的最大size，若大于，则将图片进行压缩。压缩的过程就是，使用canvas将要压缩的图片画出来
  [参考](https://www.cnblogs.com/hbujt/p/5551549.html)

9、写一个节流函数
  答： 
  ```js
  let pre = 0// 必须在函数之外
  function throttle (func){
    let cur = new Date().getTime()
    if(cur - pre > 1000){
      func()// 你需要执行的业务逻辑
      pre = cur
    }
  }
  ```

10、怎么学习？看哪些书？怎么选择技术栈？

11、看代码说输出async 函数

12、聊天

反问环节：如何评价我的表现

hr 3-3
1、独生子女？
2、手里offer情况
3、为什么选择深圳？
4、期望薪资？