// 请编写一段程序，将一个属性名包含“.”的对象转化为嵌套对象，例如:
// 【输入】{ 'A': 1, 'B.C': 2, 'D.E.F': 3, 'D.E.G.H': 4 }
// 【输出】{ A: 1, B: { C: 2 }, D: { E: { F: 3, G: { H: 4 } } } }

let obj = { 'A': 1, 'B.C': 2, 'D.E.F': 3, 'D.E.G.H': 4 }
function transform(obj) {
  let res = {}
  let arr = []

  Object.keys(obj).map(item => {
    arr.push(item.split('.'))
  })

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i].length > 1 ? obj[arr[i].join('.')] : obj[arr[i][0]]
    // res= dp(arr[i], val, res)
    if (res.hasOwnProperty(arr[i][0])) {
      let item = dp(arr[i], val)
      add(item, res) 
    } else {
      let item = dp(arr[i], val)
      Object.keys(item).map(target => {
        res[target] = item[target]
      }) 
    }
  }

  console.log(res)

}

function dp(arr, val) {
  let cur = arr.shift()
  let obj = {}
  if (arr.length <= 0) {
    obj[cur] = val
    return obj
  } else {
    obj[cur] = dp(arr, val)
    return obj
  }
}

function add(item, res) {
  let first = Object.keys(item)[0]
  item = item[first]
  let flag = true
  let cur = res[first]
  while (flag) {
    let char = Object.keys(item)[0]
    if (cur.hasOwnProperty(char)) {
      flag = true
      item = item[char]
      cur = cur[char]
    } else {
      flag = false
      cur[char] = item
    }

  }
}

transform(obj)
