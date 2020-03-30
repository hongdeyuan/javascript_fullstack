// 浅拷贝
function cloneShallow(param) {
  var target = {}
  for (var key in param) {
    // target.key = key
    if (Object.prototype.hasOwnProperty.call(param,key)) {
      target[key] = param[key]
    }
  }

  return target
}


// 深拷贝
// function cloneDeep(param) {
//   var target = {}
//   for (var key in param) {
//     // target.key = key
//     if (Object.prototype.hasOwnProperty.call(param,key)) {

//       if ( typeof param[key] === 'object') {
//         target[key] = cloneDeep(param[key])
//       }else{
//         target[key] = param[key]
//       }
//     }
//   }
//   return target
// }

function deepCopy(data) {
  const { copyDeep } = this
  if (!(data instanceof Object)) {
    return data
  } else {
    if (Array.isArray(data)) {
      return data.map(item => copyDeep.call(this, item))
    } else {
      const result = {}
      for (const itemIndex in data) {
        result[itemIndex] = copyDeep.call(this, data[itemIndex])
      }
      return result
    }
  }
}



// 兼容 数组 和对象
// function cloneDeep(param) {

//   if (typeof param !== 'object') {
//     return param
//   }

//   var target = (Array.isArray(param) ? []  : {})

//   for (var key in param) {
//     // target.key = key
//     if (Object.prototype.hasOwnProperty.call(param,key)) {

//       if ( typeof param[key] === 'object') {
//         target[key] = cloneDeep(param[key])
//       }else{
//         target[key] = param[key]
//       }
//     }
//   }
//   return target
// }



// 栈的方式 实现 深拷贝

function cloneDeep2(x) {
  const root = {}

  //栈
  const loopList = [
    {
      parent: root,
      key: undefined,
      data: x
    }
  ]

  while (loopList.length) {
    // 广度优先
    const node = loopList.pop()
    const parent = node.parent
    const key = node.key
    const data = node.data

    let res = parent // {}
    // 初始化赋值目标，key为undefined的话拷贝到父元素，否则拷贝到子元素
    if (typeof key !== 'undefined') {
      res = parent[key] = {}
    }
    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          // 下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k]
          })
        } else {
          res[k] = data[k]
        }
      }
    }
  }
  return root
}




let a = {
  name: 'dhyuan',
  book: {
    title: '大大达到',
    price: 24
  }
}


// let b = cloneShallow(a);



let c = cloneDeep2(a)

a.name ='ljc'
a.book.price = 55
console.log(c);

