/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

class LinkList {
  constructor() {
    this.head = null
    this.length = 0
  }

  append(ele) {
    const node = new ListNode(ele)
    let cur = null
    if (this.head === null) {
      this.head = node
    } else {
      cur = this.head
      while (cur.next) {
        cur = cur.next
      }
      cur.next = node
    }
    this.length++
  }

}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  // console.log(lists)
  if (lists === undefined || lists.length === 0) {
    return null;
  }
  if (lists.length == 1) {
    return lists[0]
  }

  let arr = [];
  for (let i = 0; i < lists.length; i++) {
    getArr(lists[i]);
  }
  function getArr(head) {
    while (head) {
      arr.push(head.val);
      head = head.next;
    }
  }
  arr.sort((a, b) => a - b);
  if(arr.length <= 0) return null
  let res = new ListNode(arr[0]);
  let head = res;
  for (let i = 1; i < arr.length; i++) {
    res.next = new ListNode(arr[i]);
    res = res.next;
  }
  if (head.val === undefined) {
    return null;
  }
  return head;

};
var lists = []
var list1 = new LinkList()
var list2 = new LinkList()

lists.push(list1)
lists.push(list2)

console.log(mergeKLists(lists))

// [[],[]] -> []
// [] -> []