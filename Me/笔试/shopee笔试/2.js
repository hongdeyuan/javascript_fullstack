// var numStr = readline()
// 至少四个连续相同的数字
// 至少存在4个连续递增为1的数字

let numStr = '123404153466' // -> Y


function isNiceNum(numStr) {
  let res
  res = fn2(numStr)
  if (res == 'Y') {
    return 'Y'
  } else {
    return 'N'
  }
}

function fn2(numStr) {
  let count = 0
  let str
  let obj = {}
  for (let i = 0; i < numStr.length; i++) {
    for (let j = i; j < i + 4; j++) {
      if (parseInt(numStr[j + 1]) - parseInt(numStr[j]) === 1) {
        count += 1
      }
      let num = parseInt(numStr[j])
      if (!obj[num]) {
        obj[num] = 1
      } else {
        obj[num] += 1
      }
    }
    let res = Object.keys(obj).filter(item => {
      return obj[item] >= 4
    })
    console.log(obj)
    if (count == 3 || res.length > 0) {
      str = 'Y'
      break
    } else {
      count = 0
      obj = {}
    }
  }
  return str
}

console.log(isNiceNum(numStr))