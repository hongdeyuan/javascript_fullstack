export function debounce (func, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
export function findIndex (list, song) {
  // findIndex 原生js数组自带的方法 ，找到数组首个该元素的 下标
  return list.findIndex((item) => {
    // eslint-disable-next-line no-return-assign
    return item.id = song.id
  })
}