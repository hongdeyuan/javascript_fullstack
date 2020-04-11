// 输入: "the sky is blue"
// 输出: "blue is sky the"
var reverseWords = function(s) {
  let res = s.split(' ')
  res = res.reverse()
  res = res.filter((item) => {
    return item !== ''
  })
  return res.join(' ')
};

console.log(reverseWords('  hello world!  '))