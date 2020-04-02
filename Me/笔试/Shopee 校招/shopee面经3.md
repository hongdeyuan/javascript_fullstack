## 虾皮一面

1. js类型
2. null和undefined区别
    答：1.null 表示变量赋值为空，2. undefined表示变量未定义值，即没有赋值
        3.Number(null) -> 0; 4. Number(undefined) -> NaN
3. null === null返回什么 // true

4. 原型与原型链

5. 继承
```js
function myCreate(obj) {
  var F = function () {}
  F.prototype = obj
  return new F()
}
function Student1() {
  // 继承属性
  Person.call(this)
  // this === s
}
// 继承方法
Student1.prototype = myCreate(Person.prototype)
// 修正 constructor
Student1.prototype.constructor = Student1
var s = new Student1()
```
6. new底层怎么实现（口述
    答： 
    ```js
    function myNew(constructor, ...args) {
      // 1
      let obj = {}
      // 2
      let res =  constructor.call(obj, ...args)
      // 3
      obj.__proto__ = constructor.prototype
      //4
      return res !== undefined ? res : obj
    }

    // var s1 = myNew(Person, 4)
    ```
7. instanceof怎么实现（口述）
```js
function _instanceof(left, right) {
  const rightVal = right.prototype
  const leftVal = left.__proto__
  // 若找不到就到一直循环到父类型或祖类型
  while(true) {
      if (leftVal === null) {
          return false
      }
      if (leftVal === rightVal) {
          return true
      }
      leftVal = leftVal.__proto__ // 获取祖类型的__proto__
  }
}
```
8. 跨域
    答：略
9. 强缓存和协商缓存
    答：略
10. 状态码
    答：略
11. 事件委托
    答：略
   为什么比正常绑定性能好
12. 事件循环
    答：略
13. css 居中
    答：略
14. position
    答：略
    以什么定位
15. 三栏布局
    答：略


16. vue和react哪个会的多一点（都不会）
    讲讲key

17. 虚拟dom
   答：略

其他忘记了，3.13二面

## 二面
1. 有一个对象，有什么方法能够遍历它自身的属性，而不是原型链的属性
    答：使用 `Object.getOwnPropertyNames(C)`会返回对象所有自身属性；而`Object.hasOwnProperty`用来检测自身是否含有某个属性；
2. for of循环有用过吗
        答：
            1. for of遍历的只是数组内部的元素值，不包括原型链上的方法和属性
            2. for in 遍历的是数组的索引（即键名），包括原型链上的方法和属性
3. js里面改变this指向有哪些方法？
    call/apply/bind
    call跟bind的区别？

4. ajax请求时，上传5M数据，服务端返回10M数据，一个页面有三条并行请求，为了用户体    验，怎么知道当前用户进度百分比？
    [参考](https://juejin.im/post/5da14778f265da5bb628e590#heading-8)

5. option预检，这种跨域方案下，可以传递cookie嘛？
    答： 略
6. cookie有名称值，还有什么其他属性？
    答： Path, Domain,Expires,Secure
7. xss和csrf
    怎么防御？
    答： 略

8. token存在哪里
    答： 
    
方式一、客户端使用 cookie直接认证，需要设置 cookie为 httpOnly，可以防止 xss攻击。但是无法防止 csrf攻击。需要设置伪随机数 X-XSRF-TOKEN。（推荐！不 需要处理 xss，并且xsrf 随机数有完善的应用机制）
 
方式二、 客户端使用 auth授权头认证，token存储在 cookie中，需要防止xss攻击。可以防止 csrf攻击，因为 csrf只能在请求中携带 cookie，而这里必须从 cookie中拿出相应的值并放到 authorization 头中。实际上cookie不能跨站（同源政策）被取出，因此可以避免 csrf 攻击。（适用于 ajax请求或者 api请求，可以方便的设置 auth头）
 
方式三、可以将token存储在 localstorage里面，需要防止xss攻击。实现方式可以在一个统一的地方复写请求头，让每次请求都在header中带上这个token， 当token失效的时候，后端肯定会返回401，这个时候在你可以在前端代码中操作返回登陆页面，清除localstorage中的token。（适用于 ajax请求或者 api请求，可以方便的存入 localstorage）

9. 假设浏览器上有一个页面，页面上有一个列表，我想向列表中插入1000个Dom元素，for循环1000次，每次插入一个，发现性能方面的问题，怎么优化；
    答： 使用异步让SetTimeout先加载20（count为指定条数）；再利用递归直到total<= 0时停止加载
    ```js
    function loop(total) {
      if (total <= 0) {
        return false;
      }
      setTimeout(() => {
        for (let i = 0; i < once; i++) {
          const liNode = document.createElement('li');
          liNode.innerHTML = Math.random() * 100000;
          ul.appendChild(liNode);
        }
        // 接下来的 20条
        loop(total - once);
      }, 0)
    ```

10. 浏览器的事件模型，哪些阶段？
    答：略

11. 主要用的框架是react，react的hook了解吗？
    答： 略
12. react中，最佳实践，性能优化？
    答： 略

13. react的hook下有哪些优化方法？
    答： 
14. react中的受控组件跟非受控组件？
    答：略

15. 列举两个你在实际项目中的难题？

16. 在react中怎么实现异步加载组件，比如点击按钮加载？
    答： 1.react-loadable进行异步按需加载
        2. 自定义

17. 编程：写一个斐波那切数列的实现

​ 缓存结果，第一次调用f(100) 耗时 100ms的话，第二次f(100) 耗时0ms


const fib = ((n) => {
    let arr = [0, 1, 1];
 
    return n => {
        if(arr[n]){
            return arr[n];
        }
        for(let i = arr.length; i <= n; i++){
            arr[i] = arr[i -1] + arr[i -2];
        }
        return arr[n];
    }
})();

你对于应届生毕业之后的第一份工作有什么目标