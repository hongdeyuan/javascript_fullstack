// set
// var a = new Set() // 类似数组，成员的值是唯一的

// Array.from([2, 3, 4, 5, 6, 4, 3, 2, 3]).forEach(x => a.add(x));

// for (let index of a) {
//   console.log(index)
// }


// size 获取 Set的长度
// const items = new Set([1, 2, 3, 4, 5, 5, 5])
// console.log(items.size)

// 去除数组的重复成员
// [...new Set(array)]

// 字符串去重
// let arr = [...new Set('daffajkw')].join('')

// NaN 本身是数值 是 不相等的， 但是 对于 Set来说它们是认为相等的： 至于为什么百度
// let set = new Set()
// let a = NaN
// let b = NaN
// set.add(a)
// set.add(b)
// console.log(set) // Set { NaN }

// {} 空对象 对于 Set来说是不相等的; 对于其它来说是 相等的
// set.add({})
// set.add({})
// console.log(set.size) // 2

// let s = new Set()
// s.add(1).add(2).add(2)
// console.log(s.size) // 2

// console.log(s.has(1)) // true
// console.log(s.has(2)) // true
// console.log(s.has(3)) // false

// s.delete(2)
// console.log(s.has(2)) // false

// const properies = {
//   'width': 1,
//   'height': 1
// }

// if (properies[someName]) {
//   // ...
// }


// const properies = new Set()
// properies.add('width')
// properies.add('height')

// if (properies.has(someName)) {
  
// }

// const item = new Set([1, 2, 3, 4])
// const arr = Array.from(item)
// console.log(arr, item)

// let str = new Set(['red', 'blue', 'green'])
// for (let item of str.keys()) {
//   console.log(item)
// }

// for (let item of str.values()) {
//   console.log(item)
// }

// for (let item of str) {
//   console.log(item)
// }

// for (let item of str.entries()) {
//   console.log(item)
// }

// 输出：
/**
 * [ 'red', 'red' ]
 * [ 'blue', 'blue' ]
 * [ 'green', 'green' ]
 */

// str.forEach((value, key) => {
//   console.log(value, key)
// })

// console.log( Set.prototype[Symbol.iterator] === Set.prototype.values) // true

// 解构
// let str = new Set(['red', 'blue', 'green'])
// let arr = [...str]
// console.log(arr)

// let testArr = [1, 2, 3, 4, 3, 2]
// let unique = [...new Set(testArr)]

let oSet = new Set([1, 2, 3])
// oSet = [...oSet].map(x => x*2)
// oset = [...oSet].filter(x => (x % 2) == 0)
// console.log(oset) // [ 2 ]

let b = new Set([4, 3, 2])

// 并集
// let union = new Set([...oSet, ...b])
// console.log(union)

// 交集
// let intersect = new Set([...oSet].filter(x => b.has(x)))
// console.log(intersect)

// 差集
let difference = new Set([...oSet].filter(x => !b.has(x)))
console.log(difference)