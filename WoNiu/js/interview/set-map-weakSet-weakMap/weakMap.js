// const vm = new WeakMap()
// const key = {foo: 1}
// vm.set(key, 2)
// console.log(vm.get(key)) // 2

// const k1 = [1, 2, 3]
// const k2 = [4, 5, 6]

// const vm2 = new WeakMap([
//   [k1, 'foo'],
//   [k2, 'bar']
// ])

// console.log(vm2.get(k2)) // bar

// weakMap 只接受对象(null除外)作为键名 不接受其它类型的值
// const map = new WeakMap()
// map.set(1, 2) // 因为 1 不是 对象
// map.set(null, 2) // 也报错， 虽然null为对象，但是也不行 ：特例

// console.log(map.get(1)) // 报错

// const e1 = document.getElementById('foo')
// const e2 = document.getElementById('bar')

// const arr = [
//   [e1, 'foo元素'],
//   [e2, 'bar元素']
// ]

// 当不需要使用e1 和 e2 的时候，必须手动删除


// const wn = new WeakMap()
// const element = document.getElementById('test')

// wn.set(element, 'some infomation')
// wn.get(element)


// const wn = new WeakMap()
// let key = {}
// let obj = {foo: 1}

// wn.set(key, obj)

// obj = null
// console.log(wn.get(key))

// WeakMap 弱引用 的只是 键名， 不是键值


// const wn = new WeakMap()
// console.log(wn.size) // undefined
// weakMap 没有size ， forEach，clear方法


//weakMap 应用场景

let myElement = document.getElementById('logo')
let myWeakMap = new WeakMap()
myWeakMap.set(myElement, {timesClicked: 0})

// let timesClicked = 0

myElement.addEventListener('click', () => {
  let logoData = myWeakMap.get(myElement)
  logoData.timesClicked++
  // timesClicked++
})