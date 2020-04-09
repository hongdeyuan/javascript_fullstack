var generateParenthesis = function(n) {
  let res = []
  validBrackets(res, '', n , 0, 0)
  return res
};

function validBrackets(res, cur, n , left, right) {
  if (cur.length == 2*n) {
    res.push(cur)
    return
  }
  if (left < n) {
    cur += '('
    validBrackets(res, cur, n , left+1, right)
    cur = cur.substring(0, cur.length - 1)
    console.log('left: '+cur)
  }
  if (right < left) {
    cur += ')'
    validBrackets(res, cur, n , left, right+1)
    cur = cur.substring(0, cur.length - 1)
    console.log('right: '+cur)
  }
}


console.log(generateParenthesis(3))