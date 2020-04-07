let p = Promise.resolve(1);
let p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(234)
  }, 2000)
})
function* test() {
  let a = yield p;
  console.log(a)
  let b = yield p2;
  console.log(b);
}

// 1.执行generate 2. 保证顺序

function asyncToGenerate(gen) {
  let g = gen()
  function step(value) {
    let info = g.next(value)
    if (info.done) {
      return;
    } else {
      Promise.resolve(info.value).then((res) => {
        // 把yield后面的东西info.value 直接resolve
        // 下一个yield, 下一个递归
        step(res)
      })
    }
  }
  step()
}

asyncToGenerate(test)