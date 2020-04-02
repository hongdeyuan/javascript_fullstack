
1. 自我介绍+实习经历
2. http的get post options请求方法 options的场景
  答： 
  - **GET请求会被浏览器主动cache，而POST不会，除非手动设置**。
  - **GET请求只能进行url编码，而POST支持多种编码方式**。
  - **GET产生一个TCP数据包；POST产生两个TCP数据包**

3. 自适应，响应式，一些使用场景


4. 事件循环机制
  答： 略
  前端事件流 事件捕获 事件委托 使用场景

5. webpack了解吗 treeshark 我说不了解

6. react的性能优化
  答： 略

7. react hooks
  答： 略

8. react-router路由原理
  [参考一](https://blog.csdn.net/sinat_17775997/article/details/87378812)
  [参考二](https://www.jianshu.com/p/53e7c1dcca13)
  

  react-router中 监听路由变化的时候 怎么异步处理  ，router的生命周期

9. 一个按钮，点击上传3个5M的文件，并返回10M，显示百分比，怎么设计
    [参考](https://juejin.im/post/5da14778f265da5bb628e590#heading-8)

10. 怎么去获得对象非原型链上的属性
  答： Object.getOwnPropertyNames(), Object.keys()

11. for...in for...of区别
  答： for-in 对象的索引值， for-of 是指元素值

12. 怎么判断一个对象是数组
  答： typeof ; instanceof; Object.prototype.toString.call()
  toString方法的缺点


13. 如何在页面插入1000个元素 除了使用循环

14. 算法：
实现斐波那契数列
1 1 2 3 5 8 13...
f(1) 1
f(2) 1
f(6) 8
优化： 缓存， f(1) 1000s执行时间 如果以前执行过 直接执行 f(1) 0s
闭包+缓存吧

```js
var fb = (n) => {
  var arr = [0, 1, 1]
  return (n) => {
    if(arr[n]){
            return arr[n];
        }
        for(let i = arr.length; i <= n; i++){
            arr[i] = arr[i -1] + arr[i -2];
        }
        return arr[n];
  }
}
```