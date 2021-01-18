/**
 * https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/50ywkd/
 * @param {string} s
 * @return {string}
 * 
 * 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 */
var replaceSpace = function(s) {
  let tmp = '';
  for (let index = 0; index < s.length; index++) {
    s[index] === ' ' ?  tmp += '%20' :  tmp += s[index];
  }
  return tmp;
};