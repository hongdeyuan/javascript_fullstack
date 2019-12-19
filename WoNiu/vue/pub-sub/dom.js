// {
//   tag: 'div',
//   children: [
//     {
//       tag: 'a',
//       text: 'click me'
//     }
//   ]
// }

// 渲染成下面的的结构

  // <div>
  //   <a>click me</a>
  // </div>


  // 为什么要 依赖收集
  new Vue({
    template: `<div>
      <span>{{text1}}</span>
      <span>{{text2}}</span>
    </div>`,
    data: {
      text1: 'text1',
      text2: 'text2',
      text3: 'text3'
    }
  })

  this.text3 = 'dhyuan'