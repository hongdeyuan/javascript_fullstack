/**
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是回文。
 * 返回符合要求的 最少分割次数 。
 */

/**
 * @param {string} s
 * @return {number}
 */
 var minCut = function (s) {
  const n = s.length

  // 预处理
  const isValidate = (str) => {
      const len = str.length
      const arr = new Array(len)
      for (let i = 0; i < len; i++) {
          arr[i] = new Array(len).fill(false)
      }
      for (let mid = 0; mid < len; mid++) {
          let i = mid
          let j = mid
          while (i >= 0 && j < len && s[i] === s[j]) {
              arr[i][j] = true
              i--
              j++
          }
          i = mid - 1
          j = mid
          while (i >= 0 && j < len && s[i] === s[j]) {
              arr[i][j] = true
              i--
              j++
          }
      }
      return arr
  }
  const validate = isValidate(s)
  const dp = new Array(n + 1).fill(Infinity)
  dp[0] = 0
  // dp[i] = dp[j] + 1  s[j, i - 1] 
  for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
          if (validate[j][i - 1]) {
              dp[i] = Math.min(dp[i], dp[j] + 1)
          }
      }
  }
  return dp[n] - 1

};