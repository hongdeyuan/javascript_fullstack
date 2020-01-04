// vue3.0
// 1) vue2.0会默认递归，2)数组改变length是无效的，3)对象不存在的属性不能拦截

// 判断是不是对象
function isObject(val) {
  return typeof val === 'object' && val !== null
}

// 响应式的核心方法
function reactive(target) {
  // 创建响应式的对象
  return createReactive(target)
}

// 创建响应式的对象实现
function createReactive(target) {
  if ( !isObject(target) ) {// 如果不是对象
    return target
  }

  let basehandle = {   
    // Reflect 不会报错， 而且， 会有返回值， 会替代Object上的方法
    get (target, key, receiver) {
      // console.log('获取')
      // proxy + reflect 反射
      console.log(Object.getPrototypeOf(1))// 拿到 1 的原型 -> [Number: 0]
      let res = Reflect.get(target, key, receiver)
      return res
    },
    set (target, key, value, receiver) {
      // console.log('设置')
      // 如果设置没成功，如果这个对象不可被更改witable
      let res = Reflect.set(target, key, value, receiver)
      return res
    },
    deleteProperty (target, key) {
      // console.log('删除'
      let res = Reflect.deleteProperty(target, key)
    }
  }
  let observer = new Proxy(target, basehandle)
  return observer
}
// 代理对象 -> 并且可以深层代理{name: {n : 'dhyuan'}}
let proxy = reactive({name: 'dhyuan'})

proxy.name = 'wn'
console.log(proxy.name)// 内部会调用get方法
// proxy.age = 18// 可以监听不存在的属性
// delete proxy.age// 可以删除属性  