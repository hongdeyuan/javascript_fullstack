
let res = 0
let count = 0
let nums = [100, 80, 75] 
function test(num) {
  res += num*0.63 + num
  // console.log(res)
  if (num > 0.001) {
    num = num * 0.63
    test(num)
  }
  return res
}

for (let i = 0; i < nums.length; i++) {
  const element = nums[i];
  count += test(element)
}

console.log(count) 