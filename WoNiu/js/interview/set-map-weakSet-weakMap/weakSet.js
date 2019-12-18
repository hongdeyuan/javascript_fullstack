// const ws = new WeakSet()
// ws = 1 // 报错
// ws.add(1) // 报错
// ws.add(Symbol()) // 报错

// weakSet 只能存放对象 , 不能被遍历，使用完立即释放内存
// ws.add({a: 1})
// console.log(ws)

// var a = '1'
// var b = 2

// var c  = new WeakSet()

// const a = [[1, 2], [3, 4]]
// const ws = new WeakSet()

// console.log(ws)

// weakSet 可以接收一个数组作为参数，该数组的所有的成员，对会成为weakSet实例对象
// 但是 ，传进来的数组的成员只能是对象

// 如下：
// const b = [5, 6] //数组成员 非对象 报错
// const wn = new WeakSet()
// console.log(wn) // 报错

// const ws = new WeakSet()
// const obj = {}
// const foo = {}

// ws.add(window) // 浏览器
// ws.add(obj)
// console.log(ws.has(obj))
// ws.delete(obj)
// console.log(ws.has(obj))
// ws.add(foo)


// console.log(ws.size) // undifined 因为没有 size属性
// ws.forEach() // 因为 WeakSet不能被遍历 ，所以没有 forEach

// WeakSet 没有size属性， 所以也不能被遍历

const foos = new WeakSet()
// foos对实例的引用， 不会被记入到内存回收机制当中
// 所以删除实例的时候不用考虑 foos了，也不会出现内存泄露

class Foo {
  constructor() {
    foos.add(this)
  }
  method () {
    if (!foos.has(this)) {
      throw new TypeError('err')
    }
  }
}
let faa = new Foo()
faa.method()
// 保证Foo的实例方法只能在Foo的实例上调用
