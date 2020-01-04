// vue2.0 如何实现响应式原理
// 数据变化了， 可以更新视图

// 重写数组方法 push shift unshift pop reverse
let oldArraryPrototype = Array.prototype
let proto = Object.create(oldArraryPrototype)
// let arrFun = ['push', 'shift', 'unshift']
Array.from(['push', 'shift', 'unshift']).forEach(method => {
  proto[method] = function () {// 函数劫持， 把函数重写，内部还是老方法
    updateview()// 切片编程
    oldArraryPrototype[method].call(this, ...arguments)
  }
})

function updateview () {
  console.log('更新视图')

}

// 观测者
function observer(target) {
  if ( typeof target !== 'object' || typeof target === null ){
    return target
  }

  if ( Array.isArray(target) ) {// 拦截数组， 给数组中的方法进行重写
    Object.setPrototypeOf(target, proto)  // 修改原型链
  }

  for (let key in target) {
    // Object.defineProperty(target, item, {
    //   get() {},
    //   set() {}
    // })
    defineReactive(target, key, target[key])
  }
}

function defineReactive(target, key, value) {
  observer(value)// 递归
  Object.defineProperty(target, key, {
    get () {
      return value
    },
    set(nweVal) {
      console.log('new: '+ nweVal, 'old: '+value)

      if (nweVal !== value) {
        updateview()
        value = nweVal
      }
      
    }
  })
}

// 使用Object.defineProperty 重新定义对象属性， 给属性增加getter/setter方法
let data = {name: 'wn', weight: {a:1, b: [100, 110, 120]}}
observer(data)// 观测数据data
data.weight.a = 2
// setInterval(() => {
//   data.name = String(Math.random()) + 'zm'
// }, 1000)

// let arr = [100, 11, 22]
// observer(arr)
// arr.push(200)