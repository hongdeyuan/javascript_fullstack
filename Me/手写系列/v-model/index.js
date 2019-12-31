const a = {
  b: 1
}

function fn() {
  console.log('a : \t', a.b)
}

function bindData() {
  Object.keys(a).map(key => {
    let v = a[key]
    // 用来监听对象变化， 自动触发，第一个参数： 是要监听的对象； 
    // 第二个参数是要监听对象的属性; 第三个参数: 一个对象且包含get和set方法
    Object.defineProperty(a, key, {

      // get 读取属性 调用的方法
      get() {
        console.log('正在读取a的值')
        return v
      },
      set(newVal) {
        v = newVal
        fn()
      }

    })
  })

}

bindData()
console.log(a.b)
a.b = 123