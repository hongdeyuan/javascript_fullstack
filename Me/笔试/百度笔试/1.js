
let k = 2
let arr = [1, 2, 1, 2, 1, 2]

function test(arr, k) {
  let obj = {}
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1
    } else if (obj[arr[i]]) {
      obj[arr[i]] += 1 
    }
  }
  for (let h = 1; h <= k; h++) {
    const element = obj[`${h}`];
    let count = Math.round(element / 2)
    res += count
  }
  return res
}

console.log(test(arr, k)) 