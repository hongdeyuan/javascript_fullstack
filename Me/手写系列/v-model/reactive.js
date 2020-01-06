// vue3.0
// 1) vue2.0会默认递归，2)数组改变length是无效的，3)对象不存在的属性不能拦截

let toProxy = new WeakMap()// 弱引用映射表,放置的是被代理过的对象
let toRaw = new WeakMap()// 被代理过的对象：原对象

// 判断是不是对象
function isObject(val) {
  return typeof val === 'object' && val !== null
}

function hasOwn (target, key) {
  return target.hasOwnProperty(key)
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

  let proxy = toProxy.get(target)
  if (proxy) {
    return proxy
  }
  if　(toRaw.has(target)){// 防止代理过的对象再次被代理
    return target
  }

  let basehandle = {   
    // Reflect 不会报错， 而且， 会有返回值， 会替代Object上的方法
    get (target, key, receiver) {
      console.log('获取')
      // proxy + reflect 反射
      //console.log(Object.getPrototypeOf(1))// 拿到 1 的原型 -> [Number: 0]
      let res = Reflect.get(target, key, receiver)
      return isObject(res) ? reactive(res) : res// 递归
    },
    set (target, key, value, receiver) {
      // console.log('设置')
      console.log(key, value, target[key])
      // 如果设置没成功，如果这个对象不可被更改witable
      //怎么识别是修改属性还是新增属性
      let hadKey = hasOwn(target, key)
      let oldVal = target[key]
      if (!hadKey) {
        console.log('新增属性')
      }　else if(oldVal !== value) {
        console.log('修改属性')
      }

      let res = Reflect.set(target, key, value, receiver)
      return res
    },
    deleteProperty (target, key) {
      // console.log('删除'
      let res = Reflect.deleteProperty(target, key)
    }
  }
  let observer = new Proxy(target, basehandle)
  toProxy.set(target, observer)
  toRaw.set(observer, target)
  return observer
}
// 代理对象 -> 并且可以深层代理{name: {n : 'dhyuan'}}
// let proxy = reactive({name: 'dhyuan'})

// proxy.name = 'wn'
// console.log(proxy.name)// 内部会调用get方法
// proxy.age = 18// 可以监听不存在的属性
// delete proxy.age// 可以删除属性  
// let object = {
//   name: {
//     n: 'dhyuan'
//   }
// }

// 处理多次相同代理
// let proxy = reactive(object)// 多层代理, 通过get
// proxy = reactive(object)
// proxy = reactive(object)
// proxy.name.n = 'wn'

// 记录一下　这个对象是否已经被代理过

let arr = new Array(...[1, 2, 3])

let proxy = reactive(arr)
// proxy[2] = 4// 修改属性
proxy.push(4)// 新增属性
