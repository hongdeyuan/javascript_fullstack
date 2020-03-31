# [Vue双向数据绑定的原理](https://juejin.im/post/5b86119a6fb9a019f928d82d)

## Object.defineProperty()

  > 所谓双向数据绑定, 无非就是数据层和视图层中的数据同步, 在写入数据时视图层实时的跟着更新

  > 实现mvvm的双向绑定，是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。就必须要实现以下几点：
    1. 实现一个数据监听器Observer(数据劫持)，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者
    2. 实现一个指令解析器Compile，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数
    3. 实现一个Watcher(数据监听)，作为连接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图
    4. mvvm入口函数，整合以上三者

  ![img](https://upload-images.jianshu.io/upload_images/8560482-d18d5fe20c1ade5c.png?imageMogr2/auto-orient/strip|imageView2/2/w/730/format/webp)

  个人理解：就是getter函数里面执行的任务就是watcher订阅者, 而setter函数执行的任务就是发布者;

### defineProperty属性值介绍

  1. [[Configurable]]: 表示能否通过delete将属性删除，能否把属性修改为访问器属性, 默认为false。当把属性Configurable设置为false后，该属性不能通过delete删除，并且也无法再将该属性的Configurable设置回true
  2. [[Enumerable]]: 表示属性可否被枚举(即是否可以通过for in循环返回)，默认false
  3. [[Writable]]: 表示属性是否可写(即是否可以修改属性的值)，默认false
  4. [[Value]]: 该属性的数据值, 默认是undefined
  5. [[Get]]: 读取属性时调用的函数, 默认为undefined
  6. [[Set]]: 写入属性时调用的函数, 默认是undefined 


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

## Proxy

  - Proxy整个对象的拦截,，包括‘未来属性’
  - 拦截数组， 包括(arr[0] = 123)也可以拦截
  - 与Reflect结合配对使用


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