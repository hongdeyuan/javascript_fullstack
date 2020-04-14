/**
 * [0-9], [+,-,/,*],[(,)]
 */

let str = ')()((()(((('
let arr = str.split('')

function test(str) {
  // console.log(str)
  let dui = 0
  let left = 0
  let right = 0

  for (let i = 0; i < str.length; i++) {
    if (left >= right) {
      if (str[i] === '(') {
        left ++
      } else if (str[i] === ')' && left > 0) {
        dui++
        left--
      } else if (str[i] === ')' && left <= 0) {
        right++
      }
    } else {
      if (str[i] === '(') {
        left ++
      }
      if (str[i] === ')') {
        if (left > 0) {
          dui++
          left--
        }
        if (left <= 0) {
          right++
        }
      }
    }
  }
  console.log(dui, left, right)

}
test(arr)
// console.log()