function ListNode(val) {
  this.val = val
  this.next = null
}

let n1 = new ListNode(1)
let n2 = new ListNode(2)
let n3 = new ListNode(3)
let n4 = new ListNode(4)
let n5 = new ListNode(5)

n1.next = n2
n2.next = n3
n3.next = n4 
n4.next = n5

var oddEvenList = function(head) {
  if (!head || !head.next) {
    return head
  }
  //哨兵节点  只想第一个奇节点
  // 奇数链表的头节点
  const dummyHead1 = {
    // 没有val
    next: head
  }

  // 偶数链表
  const dummyHead2 = {
    next: head.next
  }
  // 奇数节点
  let odd = dummyHead1.next
  // 偶数节点
  let even = dummyHead2.next

  while (odd && odd.next && even && even.next) {
    const oddNext = odd.next.next
    const evenNext = even.next.next
    odd.next = oddNext
    even.next = evenNext
    odd = oddNext
    even = evenNext
  }
  odd.next = dummyHead2.next
  return dummyHead1.next
};

console.log(oddEvenList(n1))
