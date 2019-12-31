(function () {
  var o = {a: 1}
  Object.defineProperty(o, 'b', {
    get () {
      return this.a
    },
    set (newVal) {
      this.a =  newVal
    },
    configurable: true// 当前 b属性是否可以被 再次修改
  })

  console.log(o.b)

  o.b = 2
  console.log(o.b)
})()