// 暴力破解
// [1,8,6,2,5,4,8,3,7]
// [1,8] 186 1862  18625 186254
// 86 862  8625
var maxArea1 = function (height) {
  let max = 0;
  for (let i = 0; i < height.length; i ++) {
    for (let j = i + 1; i < height.length; j ++) {
      let min = Math.min(height[i], height[j]);
      max = Math.max(max, min * (j - i));
    }
    console.log(max)
  }
  return max;
}


// 贪心实现
// [1,8,6,2,5,4,8,3,7]
// i = 0, j = len - 1
// i ~ j => area: 1 * (j - i)
// (i+1) ~ j ：area 更小了
// ?? i ~ (j - 1) : area 更小了
// 选择 较小的那边 往 较大值 收缩
// 贪心的思路：如果我们较大值往较小的那边收缩，那么我的 area 始终由 较小值决定，区间变小了，较小值没变，
// 反而使得我们的 area 变小了。
var maxArea = function (height) {
  let i = 0; j = height.length - 1;
  let max = Math.min(height[i], height[j]) * (j - i);
  while(i < j) {
    if (height[i] < height[j]) {
      i ++;
    } else {
      j --;
    }
    max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
  }
  return max;
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
