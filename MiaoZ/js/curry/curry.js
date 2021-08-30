function sum(a, b, c) {
  return a + b + c;
}
const curry = (func) => {
  const _curry = function(...args) {
    if (args.length === func.length) {
      return func(...args);
    }
    return (...params) => {
      let _args = [...args, ...params];
      if (_args.length === func.length) {
        return func(..._args);
      } else {
        _curry(..._args);
      }
    };
  }
  return _curry;
}
const myCurry =  curry(sum);

console.log(myCurry(3)(4,5));