# es5
  js中 函数是一等公民
  js的过去 没有clas  关键字 
  类的构造函数
  定义一个类 
  new LURCache 可以被实例化
  new 过程 发生了什么？ 
  生成了 一个对象  {}  Object 
  内存中 空的 {}  new 
  加上属性  构造函数 this 

  面向对象： 类        构造函数       方法     属性
         class     constructor    
        function A    函数本身  prototype this.
        函数具有 prototype属性 
        火车头  : 构造函数(constructor)    prototype对象  
        基于原型的面向对象

        构造函数  原型链 实例
        原型对象 

- 任何函数 都有 prototype 属性  它的值是 对象，
  key => function(){}
- 任何 对象都有  __proto__  属性 ，指向构造函数的 prototype 属性
  JS 的面向对象，类 和实例 的关系 ，不是父子关系  ，没有血缘
  基于原型的
       __proto__ ： 私有属性  任何一个对象都具有 相当于 LRUCache.prototype

# new 的过程 ：
  构造函数 被执行，创造一个 this  指向对象，
  this 为 这个对象加了‘属性’ 对象的 __proto__ 属性 找到 原型链上的方法  
  cache  intanceof LRUCache 
  JS 没有类的概念， LRUCache 也是对象 

# es6 \7 \8 \9 

# cache 模拟
                  2
  1               1 
  [1 2]           0
  get(1)        
  [2 1]
- 能装  容量
- push  最后一个元素  最重要的
- [0] 元素可以被删除
- 空间还有吗？
- get 在哪？ 放到数组最后面来 在原位置删除 并且放到最后
