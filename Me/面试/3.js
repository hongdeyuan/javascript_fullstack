// 偏函数
function add(...args) {
  return args.reduce((pre, next) => {
    return pre + next
  });
}

function partial(func) {
  return function(...args) {
    return func.call(this, ...args);
  }
}

add2 = partial(add);
console.log(add2(2,8)); //10