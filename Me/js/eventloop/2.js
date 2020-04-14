// 随机
let arr = []

setImmediate(() => {        // callback5
  console.log('setImmediate')
})

setTimeout(() => {          // callback7
  console.log('setTimeout')
}, 0);

console.log('end')
