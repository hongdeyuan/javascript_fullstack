var isPalindrome = function(x) {
  var str = x + '';
  for(let i = 0,j = str.length - 1;i < (str.length>>1);i++,j--){
      if(str[i] != str[j]){
          return false;
      }
  }
  return true
};

console.log(isPalindrome(1))