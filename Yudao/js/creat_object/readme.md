# new 的过程
  - 1. 创建一个空对象{}
  - 2. new FunctionA (){ }
    + 函数运行时，会产生几个必有得对象
    + 动态决定 this 的指向
    + this {} <= this.name1 Function 不是以new的方式来运行就是一个普通函数，此时 this 指向 window(非严格模式'use strict')
      + 当启动严格模式 ，'use strict'  此时 this 为 undefined
    + arguments 会收集所有传过来的参数
    + constructor  prototype 原型对象： Person.prototype ：{sing,constructor}
      + JS 没有类 Person 对象(函数)
      + woniu.__proto__ === Person.prototype 
    + this ：当作为对象的方法被执行时， this 指向 对象
      + woniu.sing()
      + new Person  this 指向 实例
      + 作为普通函数运行时， 不启用严格模式时，this 指向 window ，当启用严格模式时， 
      + 会抛异常(TypeError: Cannot set property 'name' of    undefined)
  - 3. 面向对象三种做法
      + constructor prototype 基于原型
      + es6 class 关键字
      + Object.create(原型对象)
  - 4. 手写代码是 js 考试的方式
      + Object.create()
      + function creat(obj) {
          function F() {};//空函数
          F.prototype=obj;//将F的原型对象换掉
          return new F();
      }
    
