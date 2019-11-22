let nums = 5260

// 
console.log(reverse(nums))
// 反转 数字
function reverse (x) {
  var max = Math.pow(2, 31) - 1;
  var min = -Math.pow(2, 31);
  var y = 0;
  // 数字反转核心
  while(x !== 0) {
      y = 10 * y + x % 10;
      x = ~~(x/10);
  }
  if (y > max) return 0;
  if (y < min) return 0;
  return y;
};

// y=  10 * 0 + 0 ; x = 12
// y = 10 * 0 + 2; x = 1
// y = 10 * 2 + 1; x = 0
// y = 21
