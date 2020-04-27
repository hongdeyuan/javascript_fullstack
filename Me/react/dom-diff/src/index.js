import { createElement, render, renderDom } from './element'
import diff from './diff'

let vertualDOM  = createElement('ul', {class: 'list'}, [
  createElement('li', {class: 'item'}, ['aaa']),
  createElement('li', {class: 'item'}, ['bbb']),
  createElement('li', {class: 'item'}, ['ccc']),
])

let vertualDOM1  = createElement('ul', {class: 'list-group'}, [
  createElement('li', {class: 'item'}, ['aaa']),
  createElement('li', {class: 'item'}, ['bbb']),
  createElement('li', {class: 'item'}, ['111']),
])

let patchs = diff(vertualDOM, vertualDOM1)

console.log(patchs)

let el = render(vertualDOM)

// console.log(el)

// DOM diff 比较连个虚拟dom区别，比较两个对象的区别

// DOM diff作用， 根据两个虚拟对象创建出补丁，描述改变的内容，将补丁用来更新dom

// 将虚拟Dom 转换成真实的Dom
renderDom(el, window.root)// document.getElementById('root') -> window.root
