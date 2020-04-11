var deleteNode = function(head, val) {
  let headNode = new ListNode();
  headNode.next = head;
  let pre = headNode;
  let cur = head;
  
  while(cur) {
      if(cur.val === val) {
          let tmp = cur.next;
          pre && (pre.next = tmp);
          cur.next = null;
          break;
      }
      pre = cur;
      cur = cur.next;
  }
  return headNode.next;
};