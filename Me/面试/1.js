function add(func) {
  let len = func.length
  console.log(len)
  const _curry = function (...args) {
    if (args.length === len) {
      return func(...args)
    }
    return function (...params) {
      let _args = [...args, ...params]
      if (_args.length === len) {
        return func(..._args)
      } else {
        return _curry(..._args)
      }
    }
  }

  return _curry
}

function sum(a, b, c) {
  // console.log(args)
  return a + b + c
}

// console.log(sum(1, 10))
const sumCurry = add(sum)
// console.log(sumCurry(1)(10)(100))

console.log(sumCurry(10, 20)(30))