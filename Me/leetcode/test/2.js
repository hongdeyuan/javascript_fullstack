const fib = ((n) => {
  let arr = [0, 1, 1];

  return n => {
      if(arr[n]){
        return arr[n];
      }
      for(let i = arr.length; i <= n; i++){
        arr[i] = arr[i -1] + arr[i -2];
      }
      return arr[n];
  }
})();

console.log(fib(6))