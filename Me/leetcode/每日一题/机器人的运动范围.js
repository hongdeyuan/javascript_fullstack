
// 输入：m = 3, n = 1, k = 0
// 输出：1

var movingCount = function (m, n, k) {
  let step = new Set();
  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= m || j >= n) return;
    // 如果没有改位置，并且两数字的位数之和的和 不大于 k
    if (!step.has(`${i}-${j}`) && digitSum(i, j) <= k) {
      step.add(`${i}-${j}`);
      dfs(i - 1, j);
      dfs(i + 1, j);
      dfs(i, j - 1);
      dfs(i, j + 1);
    }
  }
  dfs(0, 0);
  return step.size;
};
// 位数之和 的两个数字之和
// 如 num = 12  num2 = 73
// --->     3     +    10 = 13
function digitSum(num, num2) {
  let sum = 0;
  while (num != 0 || num2 != 0) {
    sum += num % 10;
    sum += num2 % 10;
    num = (num / 10) | 0;
    num2 = (num2 / 10) | 0;
  }
  return sum;
}