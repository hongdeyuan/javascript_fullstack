# 受控组件与非受控组件

  > 在React中，所谓受控组件和非受控组件，是针对表单而言的

  ## 受控组件
  > 在React中，每当表单的状态发生变化时，都会被写入到组件的state中，这种组件在React被称为受控组件

  - 受控组件只有继承React.Component才会有状态
  - 受控组件必须要在表单上使用onChange事件来绑定对应的事件

```js
import React, {PureComponent} from "react"
export default class Form extends React.Component {
    constructor(props) {
        super(props)
    }
    this.state = {
        username:"dhyuan"
    }
    handleChange = (e) => {
        let name = e.target.value;
        this.setState({
            username: name
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.username}</div>
                <input type="text" value={this.state.username} onChange={this.handleChange}/>
            </div>
        )
    }
}
```
  - 总结
    1. 可以通过在初始state中动态设置value值 
    2. 每当表单的值发生变化时，调用onChange事件处理器。如果添加了value （单选框和复选框对应的是checked）而没有添加onChange会受到react警告 
    3. 事件处理器通过合成事件对象e拿到改变后的状态，并更新state。 
    4. setState触发视图的重新渲染，完成表单组件值得更新

## 非受控组件
  > 表现形式上，react中没有添加value属性（单选按钮和复选框对应的是checked）的表单组件元素就是非受控组件
```js
render() {
  return (
    <div>
      <input type="text" />
    </div>
  )
}
```

### 非受控组件获取输入框中的值的两种方法

  1. 第一种方式：函数
    > 因为不受控组件的数据来源是 DOM 元素，所以一般情况下不受控组件我们使用ref来获取DOM元素进行操作。即在虚拟DOM节点上使用ref，并使用函数，将函数的参数挂载到实例的属性上
```js
import React, {PureComponent} from "react"
export default class Form extends React.Component {
    constructor(props) {
        super(props)
    }
    handleSubmit = (e) => {
        e.preventDefault();// 阻止默认事件
        console.log(this.username)
        console.log(this.username.value)

    }
    render() {
        return (
            <div>
                <input type="text" ref={(node)=> this.username= node} />
                <br/><br/>
                <button onClick={this.handleSubmit}>click</button>
            </div>
        )
    }
}
```

  2. 第二种方式：通过构造函数声明的方式
    - 实例的构造函数constructor这创建一个引用;
    - 在虚拟DOM节点上声明一个ref属性，并且将创建好的引用赋值给这个ref属性;
    - react会自动将输入框中输入的值放在实例的second属性上
```js
import React, {PureComponent} from "react"
export default class Form extends React.Component {
    constructor(props) {
        super(props)
        // 在构造函数中创建一个引用
        this.username = React.createRef();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.username)
        console.log(this.username.current)
        console.log(this.username.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.username} />
                <br/><br/>
                <button onClick={this.handleSubmit}>click</button>
            </div>
        )
    }
}
```