function add(func) {
  let len = func.length
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

function currying (fn) {
  let args = []
	return function _curry (...newArgs) {
		if (newArgs.length) {
			args = [
				...args,
				...newArgs
			]
			return _curry
		} else {
			return fn.apply(this, args)
		}
	}
}

function sum (...args) {
	return args.reduce((a, b) => a + b)
}

// console.log(sum(1, 10))
// const sumCurry = add(sum)
// console.log(sumCurry(1)(10)(100))

let addCurry = currying(sum)
// 注意调用方式的变化
console.log(addCurry(1, 10)())

console.log(addCurry(1)(10)(100)())


function curry (fn) {
  let args = []
  return function _curry(..._args) {
    if (_args.length) {
      args = [...args, ..._args]
      return _curry
    } else {
      return fn.bind(this, args)
    }
  }
}