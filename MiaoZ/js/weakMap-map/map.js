global.gc() // 垃圾回收
console.log(process.memoryUsage())

// node --expose-gc map.js
// 引用计数法 ：垃圾回收

let arr = new Array(4 * 1024) // []  //计数： +1
let map = new Map()
map.set(arr, 4) // 计数： +1
arr = null // 计数： -1  ->  计数为 1  不会回收
global.gc() // 垃圾回收
console.log(process.memoryUsage())