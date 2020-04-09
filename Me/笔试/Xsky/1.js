let x = 0
async function test() {
  console.log(x)
  x += await 2
  console.log(x)
}

// test()

x += 1
// console.log(x)

let previous = 0;
function buyitnow() {
  let now = new Date().getTime();
  if (now - previous >= 1000) {
    container.innerHTML = init++;
    previous = now;
  }
}

function throttle(fn) {
  let previous = 0;
  return function () {
    let now = new Date().getTime();
    if (now - previous >= 1000) {
      fn()
      previous = now;
    }
  }
}

let arr = [4,5,1,6,2,7,3,8]

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  var pivotIndex = Math.floor(arr.length >> 1)
  var pivot = arr.splice(pivotIndex, 1)[0]
  var left = []
  var right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  
  return quickSort(left).concat([pivot], quickSort(right))
}

// [1,2,3,4,5,6]
function count(arr, n, sum) {
  quickSort(arr)
  let max = arr.reduce((pre, next) => {
    return pre + next
  })
  if (sum > max) {
    return false
  }
  
  for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = i; j < i+n; j++) {
      count+= arr[j]
    }
    if (count === sum) {
      return true
    }
  }

  return false
}

console.log(count(arr, 2, 4))