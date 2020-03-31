# vue 与react 区别

  ## 监听数据变化的实现原理不同

  - vue
    - Vue 通过 getter/setter 以及一些函数的劫持(defineProperty/Proxy)，能精确知道数据变化，不需要特别的优化就能达到很好的性能
  - react
    - React 默认是通过比较引用的方式进行的，如果不优化（PureComponent/shouldComponentUpdate）可能导致大量不必要的VDOM的重新渲染
  - 注意： Vue 使用的是可变数据，而React更强调数据的不可变

  ## 数据流不同

  - Vue1.0中我们可以实现两种双向绑定： 双向数据流
    1. 父子组件之间，props 可以双向绑定
    2. 组件与DOM之间可以通过 v-model 双向绑定

    - Vue2.x 中去掉了第一种;并且 Vue2.x 已经不鼓励组件对自己的 props 进行任何修改了。
    所以现在我们只有 组件 <--> DOM 之间的双向绑定这一种(第二种)
R
  - React ： 单向数据流
    1. 从诞生之初就不支持双向绑定，React一直提倡的是单向数据流，他称之为 onChange/setState()模式

  ## HoC 和 mixins

  - vue的 mixins 只能将某些组件中公共部分提出来复用，但是没法直接包装一个组件返回一个高阶组件
  - react 的HOC可以直接返回一个包装的高阶组件，因为react本身就是纯粹的函数，所以能正常运行

  ## 父子组件传值
  - vue： 
    1. Props :父向子组件传值
    2.  $emit/事件结合： 子向父组件传值
    3. $emit/$on: 非父子组件传值(bus)vuex
    4. vuex
  - react: 
    1. 通过props 可以向子组件传递数据
    2. redux

  ## class 与className

  ## 模板渲染方式的不同
    - React 
      1. 是通过JSX渲染模板
      2. React是在组件JS代码中，通过原生JS实现模板中的常见语法，比如插值，条件，循环等，都是通过JS语法实现的
    - Vue
      1. 是通过一种拓展的HTML语法进行渲染
      2. Vue是在和组件JS代码分离的单独的模板中，通过指令来实现的，比如条件语句就需要 v-if 来实现

  ## Vuex 和 Redux 的区别

    - Vuex
      1. Vuex 中，$store 被直接注入到了组件实例中，因此可以比较灵活的使用
      - 使用 dispatch 和 commit 提交更新
      - 通过 mapState 或者直接通过 this.$store 来读取数据
    - Redux 
      1. Redux中，我们每一个组件都需要显示的用 connect 把需要的 props 和 dispatch 连接起来
      2. mapStateProps & mapdispatchProps

    - 注意： 
      1. Redux 使用的是不可变数据，而Vuex的数据是可变的。Redux每次都是用新的state替换旧的state，而Vuex是直接修改
      2. Redux 在检测数据变化的时候，是通过 diff 的方式比较差异的，而Vuex其实和Vue的原理一样，是通过 getter/setter来比较的（如果看Vuex源码会知道，其实他内部直接创建一个Vue实例用来跟踪数据变化）