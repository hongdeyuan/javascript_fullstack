import { createElement, render, renderDom } from './element'

let vertualDOM  = createElement('ul', {class: 'list'}, [
  createElement('li', {class: 'item'}, ['aaa']),
  createElement('li', {class: 'item'}, ['bbb']),
  createElement('li', {class: 'item'}, ['ccc']),
])

let el = render(vertualDOM)

// console.log(el)

// 将虚拟Dom 转换成真实的Dom
renderDom(el, window.root)// document.getElementById('root') -> window.root
