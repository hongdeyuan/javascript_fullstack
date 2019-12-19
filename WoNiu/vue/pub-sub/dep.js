// 依赖收集 原理
class Dep { // 订阅者
  constructor() {
    // 用来存放 watcher对象的数组
    this.subs = []
  }
  // subs中添加watcher对象
  addSub (sub) {
    this.subs.push(sub)
  }
  // 通知所有的watcher对象更新视图
  notify () {
    this.subs.forEach((sub) => {
      // 去更新视图
      sub.update()
    })
  }
}

class Watcher { // 观察者
  constructor () {
    // 在 new 一个 watcher 对象时， 将该对象赋值给 Dep.target，在get中会用到
    Dep.target = this
  }

  // 更新视图
  update () {
    console.log('视图更新')
  }
}

Dep.target = null

function defineReactive (obj, key, val) {
  // Dep 类对象
  const dep = new Dep()

  Object.defineProperty(obj, key, {
    // 是否可枚举
    enumerable: true,
    // 是否可配置
    configurable: true,
    get: function reacttiveGetter() {
      // 将 Dep.target (也就是当前的weatcher对象存入dep的subs中)
      dep.addSub(Dep.target)
      return val
    },
    set: function reacttiveSetter(newVal) {
      if (newVal === val) return
      // 触发dep中的notify方法，通知 所有的Watcher对象更新视图
      dep.notify()
    }
  }) 
}


class Vue {
  constructor (options) {
    this._data = options.data
    observer(this._data)
    new Watcher()
    // 模拟render 的过程， 为了触发test属性的get函数
    console.log('render~~~', this._data.test)
  }
}

function observer(val) {
  if (!val ||typeof val !== 'object') {
    return
  }
  Object.keys(val).forEach(key => defineReactive(val, key, val[key]))
}

let vm = new Vue({
  data: {
    test: 'I am test!'
  }
})

vm._data.test = 'dhyuan'