let proto = {

}

// 代理对象
function defineGetter(prop, name) {// 参数分别是要代理的对象和对象上的属性
  proto.__defineGetter__(name, function() {// 每一个对象都有一这样的方法，可以使用这个方法实现代理
    return this[prop][name] // 这里的this 是 ctx, ctx.url 得到就是this.request.url
    
  })
}

function defineSetter(prop, name) {
  proto.__defineSetter__(name, function(val) {
    this[prop][name] = val
  })
}

defineGetter('request', 'url')
defineGetter('request', 'path')
defineGetter('response', 'body')
defineSetter('response', 'body')

module.exports = proto