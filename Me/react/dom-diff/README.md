# 生成项目的过程
```js
cnpm create-react-app i -g
create-react-app dom-diff
```

# 虚拟dom
  虚拟节点，通过js的object对象模拟DOM节点，然后再通过特定的render方法将其渲染成真实的DOM节点

  createElement(type, props, children)

# DOM diff

  dom diff是通过js层面的计算，返回一个patch(用于记录 组件哪些地方修改了)对a象，再通过特定的操作来解析patch对象，完成页面的重新渲染。

  diff 三种优化策略：
  - 更新平级

## 差异计算
  - 先序深度优先遍历
    1. 用js对象模拟dom
    2. 把此虚拟dom转成真实dom并插入页面中
    3. 如果有事件发生，修改了虚拟dom，那就比较两棵虚拟dom树的差异，得到差异对象
    4. 把差异对象应用到真实的dom树上

