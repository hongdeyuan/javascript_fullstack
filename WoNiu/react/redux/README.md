# redux学习


## redux-form

1. 将 redux-form 作为一个 reducer 给到 redux的 store 状态管理仓库中

```js
import { createStore, combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import reducer from './reducer'

const reducers = combineReducers({
    reducer: reducer,
    form: formReducer
})

const store = createStore(reducers)// store 已经知道笔记本中记过两个笔记

export default store
```


2. 表单组件构建，并且将 redux-form 的 方法解构到 表单组件 中

```js
import { Field, reduxForm } from 'redux-form'
const SimpleForm = props => {
    const { 
     handleSubmit, 
     pristine, 
     reset, 
     submitting } = this.props
    return (
     <form onSubmit={handleSubmit}>
       <div>
         <Field
           name="firstName"
           component="input"// 此处可以是 自定义组件，或者textarea、select
           type="text"
         />
       </div>
       <div>
         <button type="submit">添加</button>
       </div>
     </form>
    )
}

export default reduxForm({
  form: 'simple' // 表单名称，唯一标识一个表单
})(SimpleForm);
```

注意：`<Field/>` 组件可以连接所有input类型组件的数据到store中,提供了诸如 value onChange onBlur等属性，
   用于跟踪和维护此组件的各种状态
   - 这里的 handleSumbit, pristine, reset, submitting 都是从redux-form 传递过来的。
   pristine: 表示表单还没有进行任何动作，如输入，获取焦点，失去焦点等
   submitting: 表示正在提交表单
   reset： 表示剩余参数
   handleSumbit： 表示 操作提交


### 常见参数介绍

必要参数
- `form : String[required]`: 用于命名自己的表单，在store生成此命名的数据节点（唯一）

可选参数
- `onChange : Function [optional]` : 表单触发 onChange 事件后的回调
- `onSubmit : Function [optional` : 表单提交配置，可以配置需要提交哪些参数，还有提交时触发的 dispatch等
- `onSubmitSuccess : Function [optional] & onSubmitFail : Function [optional`: 提交表单成功和失败的回调
- `shouldValidate(params) : boolean [optional]` : 同步验证
- `shouldAsyncValidate(params) : boolean [optional]`: 异步验证
- `touchOnBlur : boolean [optional] & touchOnChange : boolean [optional]`: 标识 onBlur 或 onChange 的触发。


### 常用属性
- pristine : true 表示表单数据为原始数据没被修改过，反之为 dirty。
- submitting : 用于表示您的表单提交状态，他只会在您的表单提交后返回一个 promise 对象时起作用。 false 表示 promise 对象为 resolved 或   rejected 状态。
- handleSubmit(eventOrSubmit) : Function : 提交表单的函数，如果表单需要验证，验证方法会被执行(包括同步和异步)。调用方法有两种:
    组件内部直接调用 <form onSubmit={handleSubmit}>
    赋值给prop外部调用 <MyDecoratedForm onSubmit={data => {//do something with data.}}/>