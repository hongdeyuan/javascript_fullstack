// import _ from 'lodash'
// import './style/index.css'
// import './style/leo.scss'

// function createElement() {
//   let div = document.createElement('div')
//   div.innerHTML = _.join(['my', 'name', 'is', 'dhyuan', ''], '')
//   div.className = 'box'
//   return div
// }

// document.body.appendChild(createElement())

// import "@babel/polyfill";
// polyfill: 1.以全局变量的方式注入进来的，windows.Promise,会造成全局变量的污染

// transform-runtime: 与 polyfill相似，
// 但是它是以插件的形式引入;它不会造成全局变量的污染，
// 因此他也不会对类似的Arrary.prototype.includes()进行polyfill
// let obj = {}
// const str = ''
// const arr = new Promise(() =>{})
// arr.map((item) => {
//   console.log(item)
// })


// import React, { Component } from 'react'
// import ReactDom from 'react-dom'
// import Child from './test.jsx'

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Child/>
//       </div>
//     );
//   }
// }

// ReactDom.render(<App/>, document.getElementById('app'))


import { add } from './a.js'

add( 1 , 1)