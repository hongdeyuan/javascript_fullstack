# 生成项目的过程
```js
cnpm create-react-app i -g
create-react-app dom-diff
```

# 虚拟dom
  虚拟节点，通过js的object对象模拟DOM节点，然后再通过特定的render方法将其渲染成真实的DOM节点

  createElement(type, props, children)