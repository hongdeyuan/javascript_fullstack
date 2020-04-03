# react-router原理
  ## hash
  - URL 中 hash 值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash 部分不会被发送。
  - hash 值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制hash 的切换。
  - 我们可以使用 hashchange 事件来监听 hash 的变化。


  ## history
  - pushState 和 repalceState 的标题（title）：一般浏览器会忽略，最好传入 null ；
  - 我们可以使用 popstate  事件来监听 url 的变化；
  - history.pushState() 或 history.replaceState() 不会触发 popstate 事件，这时我们需要手动触发页面渲染

  ## React-router中的history
    - 击Link标签传递给新渲染的组件的props中有一个history对象，这个对象的内容很丰富，比如：action、goBack、go、location、push和replace方法
    -

[参考一](https://juejin.im/post/5ba05cc65188255c8b6ee234#heading-12)
[参考二](https://juejin.im/post/5d469f1e5188254e1c49ae78)