global.gc() // 垃圾回收
console.log(process.memoryUsage())

// node --expose-gc map.js
// 引用计数法 ：垃圾回收

let arr = new Array(4 * 1024) // []  //计数： +1
let map = new WeakMap()  // let map = new Map()
// weakMap 即便 key 引用 这 Array 
// 但是 垃圾回收不会把它考虑在内， 依然会回收Array

map.set(arr, 4) // 计数： +1
arr = null // 计数： -1  ->  计数为 1  会回收
global.gc() // 垃圾回收
console.log(process.memoryUsage())