1. 自我介绍

2. 进程线程区别
  答：
    - 区别
      - 进程
      1. 一个程序至少有一个进程,一个进程至少有一个线程
      2. **上下文切换开销较大**
      3. **进程是资源统一分配的基本单位**
      4. 一个程序可以拥有多个进程，进程间相互独立存在
      5. **进程拥有独立的内存空间**，进程间进行信息交换需要依赖进程间通信
      6. **进程 创建/销毁 时需要 开辟/释放 内存空间**

      - 线程
      1. **线程是资源独立调度的基本单位**，本身并不拥有资源
      2. 线程的划分尺度小于进程，使得多线程程序的并发性高
      3. **线程依附于进程而存在，独立性较低，一个进程可以拥有多个线程**
      4. **线程共享他所在的进程的资源**，所以通信与同步的时空开销较小（但共享时有**锁机制**）
      5. **线程创建 / 销毁时无需对内存空间进行操作**
      6. **上下文切换开销较小**

3. 快排原理和实现 复杂度多少 为什么
  答：
    - 快排原理: 
      1. 选择 一个基准（一般选择index中间值）
      2. 让数组中小于 基准的值，放在左边；大于基准的放右边
      3. 重复 1、2 步骤
    - 快排实现
    ```js
    function quickSort(arr){
      if(arr.length <= 1){
        return arr
      }
      let index = arr.length >> 1 // Math.floor(arr.length/2)
      let indexVal = arr.splice(index, 1)// 记得是直接把它取出来
      let left = []
      let right = []
      arr.forEach(item => {
        if(item < indexVal){
          left.push(item)
        } else {
          right.push(item)
        }
      })

      return quickSort(left).concat([indexVal], quickSort(right))

    }
    ```
    - 复杂度：时间---nlogn  ;空间--n
    - 为什么
      平均情况下：T(n)=2*T(n/2)+n;      第一次划分
      =2*（2*T(n/4)+n/2）+n;     第二次划分  (=2^2*T(n/4)+2*n)
      =2*(2*(2*T(n/8)+n/4)+n/2)+n;     第三次划分(=2*3*T(n/8)+3*n)
      =.....................
      =2^m+m*n;  第m次划分
      因为2^m=n,所以等价于 = n+m*n
      所以m=logn，所以T(n)=n+n*logn;   

4. tcp udp 区别 属于哪层协议 下层和上层什么协议
  答：
    - udp
      1. 不可靠、无连接的服务、传输效率高
      2. 效率要求高，准确性要求相对较低的场景
      3. 在线视频，网络语音电话。。
    
    - tcp
      1. 可靠性、面向连接的协议、传输效率低
      2. 效率要求较低，当准确性相对较高
      3. 文件传输、接受邮件、远程登录
    - 属于传输层 协议
    - 上层： 会话层； 下层： 网络层

5. [http2.0-新特性](https://blog.csdn.net/qq_32337109/article/details/79975253)

  答： 
    - 1、增加二进制分帧
    - 2、压缩头部
    - 3、多路复用
    - 4、请求优先级
    - 5、服务器提示


6. https
  答：
    > 基于HTTP协议，通过SSL或TLS提供加密处理数据、验证对方身份以及数据完整性保护
    - 端口： 443
    - 相对于 http 多了ssl加密传输

7. [事件循环](https://juejin.im/post/5e647b806fb9a07cc50f19b5)

  - Event Loop即事件循环，是解决javaScript单线程运行阻塞的一种机制

8. [原型链](https://www.jianshu.com/p/be7c95714586)

9. [优化执行用时长的函数](https://juejin.im/post/5df2350c518825123e7af1ab)
  答： 节流和防抖
  上一题答了函数节流和防抖，追问了一下两种区别

10. [css 盒模型 （两种区别，如何切换）](https://juejin.im/post/59ef72f5f265da4320026f76)
  - 1. W3C 标准盒模型：
      属性width,height只包含内容content，不包含border和padding。
  - 2. IE 盒模型：
      属性width,height包含border和padding，指的是content+padding+border

11. [position 取值区别](https://blog.csdn.net/Zetang_Wu/article/details/81589687)
  Position属性有以下四个取值：

  - static:静态定位，是position属性的默认值，表示无论怎么设置top、bottom、right、left属性元素的位置（与外部位置）都不会发生改变。

  - relative：相对定位，表示用top、bottom、right、left属性可以设置元素相对与其相对于初始位置的相对位置。

  - absolute：绝对定位，表示用top、bottom、right、left属性可以设置元素相对于其父元素（除了设置了static的父元素以外）左上角的位置，如果父元素设置了static，子元素会继续追溯到祖辈元素一直到body。

  - fixed：绝对定位，相对于浏览器窗口进行定位，同样是使用top、bottom、right、left。


12. vue 双向数据绑定原理
  - Object.defineProperty Vue1.0
    ```js
    (function () {
    var o = {a: 1}
    Object.defineProperty(o, 'b', {
      get () {
        return this.a
      },
      set (newVal) {
        this.a =  newVal
      },
      configurable: true// 当前 b属性是否可以被 再次修改
    })

    console.log(o.b)

    o.b = 2
    console.log(o.b)
  })()
    ```
  - proxy Vue2.0
    ```js
    let proxyData = new Proxy(data, {
      get (target, key, val, receiver) {
        if (key.startsWith('_')) {
          throw new Error('private property');
        } else {
          return Reflect.get(target, key, val, receiver);
        }
      },
      set: function(target, key, val, receiver) {
        console.log('数值改变了', target, key, val, receiver);
        // 回复set的能力
        return Reflect.set(target, key, val, receiver);// 反射set
      },
      deleteProperty (target, key, val, receiver) {
        console.log('属性删除了');
        return Reflect.deleteProperty(target, key, val, receiver)
      }
    })
    ```

13. [虚拟 dom diff 算法（如何对比）](https://www.cnblogs.com/simpul/p/11583383.html)
    [参考一](https://juejin.im/post/5a3200fe51882554bd5111a0)
    [参考二](https://www.jianshu.com/p/55e67e8739f6)

14. 介绍项目，遇到的最大困难以及如何解决的
