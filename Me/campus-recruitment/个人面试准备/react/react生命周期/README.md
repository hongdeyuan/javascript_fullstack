# React生命周期
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