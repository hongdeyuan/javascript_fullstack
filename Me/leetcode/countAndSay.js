// 38. 报数
/**
 * 1           n = 1
 * 11          n = 2
 * 21          n = 3
 * 1211        n = 4
 * 111221      n = 5
 * 312211        n = 6
 */

var countAndSay = function(n) {
  if (n === 1) {
    return '1'
  }
  return createSay(1, [1], n)
}

function createSay(index, str, n) {
  
}



var countAndSay1 = function(n) {
  return createStr(1, ['1'], n)

function createStr(index, str, n) {
      if(index == n)
          return str.join('')
      index++
      let newChar = []
      let k = 1
      for(let j = 0; j < str.length; j++) {
          let char = str[j]
          if(char == str[j+1] && j != str.length - 1) {
                 k++
          }else {
              newChar.push(k)
              newChar.push(str[j])
              k=1
          }
      }
      return createStr(index, newChar, n)
  }  
}