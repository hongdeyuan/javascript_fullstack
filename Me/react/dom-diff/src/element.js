// 虚拟DOM元素的类
class Element {
  constructor(type, props, children) {
    // super(props);
    this.type = type;
    this.props = props;
    this.children = children;
  }
  
}

// 设置属性 自定义 setAttribute
function setAttribute(node, key, value) {
  switch (key) {
    case 'value': // node是一个input或者textarea
      if (node.tagName.toUpperCase() === 'INPUT' || 
      node.tagName.toUpperCase() === 'TEXTAREA') {
        node.value = value
      } else {
        node.setAttribute(key, value)
      }
      break;
    case 'style':
      node.style.cssText = value
      break;
    default:
      node.setAttribute(key, value)
      break;
  }
}

// 返回虚拟节点
function createElement(type, props, children) {
  return new Element(type, props, children);
}

// render 方法可以将vNode 转Obj换为真实的DOM
function render(eleObj) {
  let el = document.createElement(eleObj.type)
  for (let key in eleObj.props) {
    // el.setAttribute() // 不使用元素的，自己写一个
    // 设置 属性的方法
    setAttribute(el, key, eleObj.props[key])
  }
  // 遍历儿子节点
  eleObj.children.forEach(child => {
    // 如果是虚拟dom，继续渲染，不是就代表是文本节点
    child = (child instanceof Element) ? render(child) : document.createTextNode(child)
    el.appendChild(child)
  })

  return el
}

// 将元素插入页面内
function renderDom(el, target) {
  target.appendChild(el)
  // return target
}


export { createElement, render, Element, renderDom }