// add(1, 2, 3)
// add(1)(2)(3)
let count = 0
let result = 0
function add(...args){
  count++
  let length = args.length
  if (length === 3 || (count + length) === 3) {
    result += args.reduce((pre, next) => {
      return pre + next
    })
    return result
  }
  result += args.reduce((pre, next) => {
    return pre + next
  })
  return this
}

console.log(add(1, 2)(3))