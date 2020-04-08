// 最小k个数

function test(input, k) {
  mao(input)
  // console.log(input)

  // return input.filter((item) => {
  //   return item <= input[k-1]
  // })

  return input.slice(0, k)
}

function mao(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 -i; j++) {
      if (arr[j] > arr[j + 1]) {
        let num = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = num
      }
    }
  }
}

console.log(test([4,5,1,6,2,7,3,8], 4))