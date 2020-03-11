# 腾讯电话面试
  ## 腾讯2020 一面 问题
    1. vue数据双向绑定
    2. vue路由的工作原理
    3. computed的实现
    4. js为什么单线程执行
    5. js的执行机制
    6. js的继承方式
    7. 数组的遍历方式
    8. 正方形居中方式
    9. 安全方面问题
    10. web的性能优化
    11. 跨域问题
    12. 多态的实现


## vue数据双向绑定
  实现一个监听器 Observer：对数据对象进行遍历，包括子属性对象的属性，利用 Object.defineProperty() 对属性都加上 setter 和 getter。这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化。

  实现一个订阅者 Watcher：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁 ，主要的任务是订阅 Observer 中的属性值变化的消息，当收到属性值变化的消息时，触发解析器 Compile 中对应的更新函数。

  实现一个解析器 Compile：解析 Vue 模板指令，将模板中的变量都替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，调用更新函数进行数据更新。

  实现一个订阅器 Dep：订阅器采用 发布-订阅 设计模式，用来收集订阅者 Watcher，对监听器 Observer 和 订阅者 Watcher 进行统一管理。

  ```js
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
  ```

## 响应式原理
  把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter。 每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据属性记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。

## 怎样理解 Vue 的单向数据流
  所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。
  额外的，每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。子组件想修改时，只能通过 $emit 派发一个自定义事件，父组件接收到后，由父组件修改。 有两种常见的试图改变一个 prop 的情形

## vue生命周期
   ![img](https://user-gold-cdn.xitu.io/2018/5/17/1636e36fa395a51f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
  ### Vue 的父组件和子组件生命周期钩子函数执行顺序？
    Vue 的父组件和子组件生命周期钩子函数执行顺序可以归类为以下 4 部分:
  - 加载渲染过程 父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted
  - 子组件更新过程 父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated
  - 父组件更新过程 父 beforeUpdate -> 父 updated
  - 销毁过程 父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed

  ### 在哪个生命周期内调用异步请求
    可以在钩子函数 created、beforeMount、mounted 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。但是本人推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：
  - 能更快获取到服务端数据，减少页面 loading 时间；
  - ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性

  ### 组件中 data 为什么是一个函数？
    因为组件是用来复用的，且 JS 里对象是引用关系，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，如果组件中 data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相影响；而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题。
  
  ### Vue 组件间通信有哪几种方式
    #### (1)props / $emit 适用 父子组件通信

    #### (2)#attrs/$listeners 适用于 隔代组件通信
    
    #### (3) Vuex 适用于 父子、隔代、兄弟组件通信
      Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。 Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。 改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化
    #### (4) bus.js/$emit/$on

## 谈谈你对 keep-alive 的了解？
  keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染 ，其有以下特性
  - 一般结合路由和动态组件一起使用，用于缓存组件
  - 提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高
  - 对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated

## vue-router 路由模式有几种
  - hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器
  - history : 依赖 HTML5 History API 和服务器配置。具体可以查看 HTML5 History 模式
  - abstract : 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.

## 能说下 vue-router 中常用的 hash 和 history 路由模式实现原理吗?
  - （1）hash 路由模式的实现主要是基于下面几个特性： URL 中 hash 值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash 部分不会被发送； hash 值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制hash 的切换； 可以通过 a 标签，并设置 href 属性，当用户点击这个标签后，URL 的 hash 值会发生改变；或者使用 JavaScript 来对 loaction.hash 进行赋值，改变 URL 的 hash 值； 我们可以使用 hashchange 事件来监听 hash 值的变化，从而对页面进行跳转（渲染）
  - （2）history 模式的实现原理 HTML5 提供了 History API 来实现 URL 的变化。其中做最主要的 API 有以下两个：history.pushState() 和 history.repalceState()。这两个 API 可以在不进行刷新的情况下，操作浏览器的历史纪录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录

## Vue 框架怎么实现对象和数组的监听？
  Object.defineProperty() 只能对属性进行数据劫持，不能对整个对象进行劫持，同理无法对数组进行劫持， Vue 框架是通过遍历数组 和递归遍历对象，从而达到利用 Object.defineProperty() 也能对对象和数组（部分方法的操作）进行监听

## 虚拟 DOM 实现原理
  虚拟 DOM 的实现原理主要包括以下 3 部分： 用 JavaScript 对象模拟真实 DOM 树，对真实 DOM 进行抽象； diff 算法 — 比较两棵虚拟 DOM 树的差异； pach 算法 — 将两个虚拟 DOM 对象的差异应用到真正的 DOM 树

## 你有对 Vue 项目进行哪些优化
  v-if 和 v-show 区分使用场景 computed 和 watch 区分使用场景 v-for 遍历必须为 item 添加 key，且避免同时使用 v-if 长列表性能优化 事件的销毁 图片资源懒加载 路由懒加载 第三方插件的按需引入 优化无限列表性能 服务端渲染

