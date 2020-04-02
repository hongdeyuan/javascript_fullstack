let foo = {'a': 1}
Object.prototype.fn = function (...args) {
  let [p1, p2] = [...args]
  console.log(p1, p2, this[p1])
}
foo.fn('a')

