function NodeList(val) {
  this.val = val
  this.next = null
}
const n1 = new NodeList(1)
const n2 = new NodeList(2)
const n3 = new NodeList(3)
const n4 = new NodeList(4)
const n5 = new NodeList(5)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5

// console.log(n1)

const reverseList = (head) => {
  if (head == null || head.next == null) {
    // 退出条件
    return head; // 头结点
  } else {
    let newHead = reverseList(head.next) // 递归
    head.next.next = head; //反过来 
    head.next = null; // 把之前的next 干掉
    return newHead;
  }
}

var reverseBetween = function(head, m, n) {

  if (!head  || head.next == null) {
    return head
  }
  const dummy = {
    next: head
  }
  let current = dummy;
  
  
  return dummy.next
};




console.log(reverseBetween(n1, 2, 4))