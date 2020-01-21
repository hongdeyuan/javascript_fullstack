// 27. 移除元素
// nums = [3,2,2,3], val = 3

// var removeElement = function(nums, val) {
//   var i = 0
//   while (i < nums.length) {
//     if (nums[i] === val) {
//       nums.splice(i, 1)
//     } else {
//       i++
//     }
//   }
//   console.log(nums)
//   return nums.length
// };

// console.log(removeElement([0,1,2,2,3,0,4,2], 2))

// 203. 移除链表元素


function NodeList(val) {
  this.val = val
  this.next = null
}

const n1 = new NodeList(1)
const n2 = new NodeList(2)
const n3 = new NodeList(6)
const n4 = new NodeList(3)
const n5 = new NodeList(4)
const n6 = new NodeList(5)
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = n6

var removeElements = function(head, val) {
  const dummy = {
    next: head
  }
  let current = dummy;
  while(current && current.next){
    let next = current.next
    if (next.val == val) {
      current.next = next.next
    }
    if (next.val !== val) {
      current = next
    }
  }

  return dummy.next
};


console.log(removeElements(n1, 6))