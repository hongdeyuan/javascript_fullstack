# React & Vue生命周期深入解析

# React 生命周期
![img](https://user-gold-cdn.xitu.io/2017/11/11/88e11709488aeea3f9c6595ee4083bf3?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

> React生命周期主要包括三个阶段：初始化阶段、运行中阶段和销毁阶段，在React不同的生命周期里，会依次触发不同的钩子函数.

## 一、初始化阶段

### 1.设置组件默认属性

```js
  static defaultProps = {
    name: 'dhyuan',
    age:18
  };
  //or
  Counter.defaltProps={name:'dhyuan', age: 18}
```

### 2. 设置组件初始化状态，即构造函数 执行

```js
  constructor (props) {
    super(props)
    console.log('1. 构造函数')
    this.state = { 
      girlfriend: 'ljc'
    }
  }
```

### 3. 组件将要挂载

```js
  componentWillMount () {
    // 此时可以访问属性和状态，可以进行api调用，但是没有办法做dom相关的操作
    console.log('2. 组件将要挂载')
  }
```

### 4. 组件渲染 执行render函数

```js
  render () {
    console.log('3.组件渲染')
    return (
      <div>组件生命周期探究</div>
    )
  }
```

### 5. 执行componentDidMount

```js
  componentDidMount () {
    // 组件已经渲染完成，可以进行状态更新操作,此时页面中有了真正的DOM的元素，可以进行DOM相关的操作
    console.log('4. 组件已挂载')
  }
```

## 二、运行中阶段

  ### 6.父组件传递的属性有变化 执行componentWillReceiveProps
  ```js
    componentWillReceiveProps () {
    // 父组件传递的属性有变化，做相应的操作
    console.log('5. 组件属性更新了')
    }
  ```

  ### 7. 执行shouldComponentUpdate

  ```js
    shouldComponentUpdate () {
    // 组件是否需要更新，返回布尔值
    console.log('6. 组件是否需要更新?')
    return true
    }
  ```

  ### 8. componentWillUpdate

  ```js
  componentWillUpdate () {
    console.log('7. 组件将要更新')
  }
  ```

  ### 9. 执行componentDidUpdate

  ```js
    componentDidUpdate () {
      console.log('8. 组件已经更新')
    }
  ```

## 三、 销毁阶段

  ### 10. componentWillUnmount

  ```js
    componentWillUnmount() {
      //组件被销毁时触发。这里我们可以进行一些清理操作，例如清理定时器，取消Redux的订阅事件等等。
      console.log('10、子组件将卸载');
    }
  ```


  # Vue生命周期

  ![img](https://user-gold-cdn.xitu.io/2018/5/17/1636e36fa395a51f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

  > vue的生命周期也是分为三个阶段：初始化阶段、运行时阶段和销毁阶段。

  ## 一、初始化阶段

  ### new Vue

  > 开始创建 Vue实例对象

  注意：此时只有一个空的实例对象

  ### Init Event & Lifecycle

  > 开始 初始化Vue实例的生命周期函数和默认事件

  ### beforeCreate

  > 执行此函数时， el，data 都是 undefined，因为此时都还未初始化

  注意：可以在此加入 loading 事件

  ### Init injections & reactivity

  > 此时，data属性被成功绑定，但$el还是没有生成，也就是DOM没有生成，el还是为undefined

  ### created执行

  > 实例创建完成后，data、methods 被初始化,，但$el还是没有生成，也就是DOM没有生成，el还是为undefined

  注意：可以在此结束 loading 事件；推荐这个时候发送请求数据，尤其是返回的数据与绑定事件有关时

  ### Vue编辑模板阶段

  > 会判断options（new Vue()里面的大对象）里面是是否有$el，有的话再看options里面是否有template；若是没有，在等待vm.$mount(el)方法调用，为组件提供DOM容器，如果都提供了teamplate，则编译template模板，若是没有模板，则编译el里面的的元素。要注意的是此时只是编译了模板，还没有把属性挂载上去；也就是此时的模板存储在内存中


  ### beforeMount执行

  > 表示完成el和data初始化，在挂载开始之前被调用；也就是说此时，表示el已经有了虚拟值，存储在内存中


  ### Create vm.$el and replace "el" with it

  > 此时将内存中编辑好的模板，替换到浏览器的页面上去

  ### Mounted执行

  > 表示 整个Vue实例创建完毕，此时el 为真实的值，data也是真的数据；此时也代表，组件已经脱离创建阶段，进入到运行阶段

 ## 二、运行阶段

 ### beforeUpdate

  > 当数据变化之后，执行此函数，此时页面数据仍然时旧数据，但此时data的数据是最新的，页面尚未和最新的数据保持同步。

### Virtual DOM re-render and patch 

  > 此时，先根据data中最新的数据，在内存中重新渲染出一份最新的DOM树；当最新的内存DOM书被更新之后，会把最新的内存DOM树渲染到浏览器页面上去；这时候就完成了数据data(Model层) -> view (视图层)的更新

### updated

  > 执行updated的时候，页面和data数据已经保持同步了，此时表示更新完成。


 ## 三、销毁阶段

  ### beforeDestory（销毁前）

  > 当执行beforeDestory的时候，表示Vue实例已经从运行阶段进入了销毁阶段，此时，data,methods等都处于正常状态，只是表示进入了销毁阶段。此时，实例销毁之前，执行清理任务，比如：清除定时器等。

  ### Teardown watcher ,child components and event listeners

  > 此时，是所有东西被解绑定，所有的事件监听器会被移除，所有的子实例被销毁过程。

  ### destoryed

  > 此时，表示销毁完成

