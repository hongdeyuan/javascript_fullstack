var arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubArray(nums) {
  let i, k, j;
  let thisSum;
  // 不分整数，浮点数
  let maxSum = -Number.MAX_VALUE;
  for (i = 0; i < nums.length; i++) {
    for (k = i; i < nums.length; k++) {
      // end: k  start: i
      thisSum = 0;
      for (j = i; j <= k; j++) {
        thisSum += nums[j];
      }
      if (thisSum > maxSum) {
        maxSum = thisSum;
      }
    }
  }
  return maxSum;
}



// 解法一 进阶
function maxSubArray1(nums) {
  let i, k, thisSum, maxSum;
  maxSum = -Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    thisSum = 0
    for (let k = i; k < nums.length; k++) {
      // start: i  end: k
      thisSum += nums[k];
      if (thisSum > maxSum) {
        maxSum = thisSum
      }
    }
  }
  return maxSum
}

// 解法三
var maxSubArray3 = function (nums) {
  let maxSum = - Number.MAX_VALUE;
  let sum = 0;
  for (let num of arr) {
    if (sum < 0) {
      sum = 0;
    }
    sum += num;
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}
// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray3(arr))