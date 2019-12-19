let selectOffices = {} //售楼部
selectOffices.books = [] // 缓存列表， 花名册， 存放订阅者的 回调函数

// 增加订阅者
selectOffices.listen = function (fn) {
  this.books.push(fn) // 订阅消息 添加到缓存列表
}

selectOffices.trigger = function () {
  // 发布消息
  // for (let i = 0, fn; (fn = selectOffices.books[i++]); ) {}
  for (let i = 0; i < selectOffices.books.length; i++) {
    let fn = selectOffices.books[i]
    fn.apply(this, arguments)
  }
}

selectOffices.listen(function (price, squareMeter) {
  // 购买者a
  console.log(`价格: ${price}￥ \t 面积: ${squareMeter}平方米`)
})

selectOffices.listen(function (price, squareMeter) {
  // 购买者b
  console.log(`价格: ${price}￥ \t 面积: ${squareMeter}平方米`)
})

selectOffices.trigger(2000000, 120)