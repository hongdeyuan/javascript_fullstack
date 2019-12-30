## 监听对象属性改变
  - get/set
  - Proxy
    - 在目标对象之前，拦截一层，对目标对象的访问，都经过这一层拦截
  
## defineProperty && Proxy
  - defineProperty 只能监测对象属性，而且是用defineProperty定义上去的
    不能监测'未来'属性
  - Proxy整个对象的拦截, 多大13种操作，包括‘未来属性’
  - 拦截数组， 包括(arr[0] = 123)也可以拦截

## 元编程
  对语言(js)再次编程, 修改默认行为
  - proxy
