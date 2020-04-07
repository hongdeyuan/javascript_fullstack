const fs = require('fs')

// 回调
let count = 0
fs.readFile('./', () =>{
  setTimeout(()=>{
    count ++
    fs.appendFile('./', count, (err) => {

    })
  }, 3000)
})

// 2. Promise

Promise('./')
.then(()=>{
  count ++
})
.then(()=>{
  fs.appendFile('./', count, (err) => {

  })
})

// Co 作者 TJ
// es6 -> generater
co(
  function * test() {
    let c = yield fs.readFile()
    c++
    let res = yield fs.appendFile('./', c)
  }
)

// 3. async await
async () =>{
  let c = await fs.readFile()
  c++
  let res = await fs.appendFile('./', c)
}

// 立即resolve 的promise

// 如果没有关键字(async, await) 怎么保证后面代码执行
let p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(12)
  }, 2000)
})

let p = Promise.resolve(1)
// 重点
(async function() {
  // await 后面 接 promise ？？？
  // 接 promise 才能够保证 顺序
  let c = await p;
  let d = await p2;
  let f = await 789
  console.log(c);
})()

// 怎么 保证 p resolve 后面代码才会执行
// 都用 Promise.resolve 包装一层 不用判断 await、yield 后面 到底是 promise（有 then方法）还是非 promise（没有 then方法）
Promise.resolve(p).then(() => {
  Promise.resolve(p2).then(() => {
    Promise.resolve(789).then(() => {
      console.log(c);
    })
  })
})
