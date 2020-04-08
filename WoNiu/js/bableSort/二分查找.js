// 二分法查找 https://juejin.im/post/5dd4c4ce6fb9a020350a8c54

function doubleFind(arr, target) {
  let left = 0
  let right = arr.length - 1;
  while(left <= right){
    let mid = Math.floor((right + left) / 2)
    if(arr[mid] === target){     //找到目标值
        return mid; 
    }else if(arr[mid] > target){ //比目标值大，说明数在前半部分，缩小右边界
        right = mid - 1;
    }else{                       //比目标值小，说明数在后半部分，缩小左边界
        left = mid + 1; 
    }
  }
}