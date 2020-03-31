var lastRemaining = function(n, m) {
  let arr = []
  for(let i =0; i< n; i++){
      arr.push(i)
  }
  let idx = 0
  while(n>1){
      idx = (idx + m - 1) % n
      arr.splice(idx, 1)
      n--
  }
  return arr[0]
};