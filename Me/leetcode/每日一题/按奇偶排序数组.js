/**
 * @param {number[]} A
 * @return {number[]}
 * 
 * https://leetcode-cn.com/problems/sort-array-by-parity/
 * 
 * 输入：[3,1,2,4]
 * 输出：[2,4,3,1]
 * 输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。
 */
var sortArrayByParity = function (A) {
  let i = 0, j = A.length;
  while (i < j) {
    if (A[i] % 2 > A[j] % 2) {
      const tmp = A[i];
      A[i] = A[j];
      A[j] = tmp;
    }
    if (A[i] % 2 === 0) {
      i += 1;
    }
    if (A[j] % 2 === 1) {
      j -= 1;
    }
  }
  return A;

  // return A.sort((a,b)=>a%2-b%2); 一行解决,   推荐使用
};