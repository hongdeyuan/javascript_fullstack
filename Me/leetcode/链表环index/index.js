let head = null;

let Node = function (element) {
  this.element = element;
  this.next = null;
}

let LinkList = function () {
  this.head = null;
  this.length = null;
}

LinkList.prototype.add = function (element) {
  //new 一个结点 ：一个对象
  let block = new Node(element);

  if (!this.head) {
    this.head = block;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    //此时，找到了最后一个结点
    current.next = block; //最加一个新增的 结点
  }

}

var list = new LinkList();
list.add(3);
list.add(2);
list.add(0);
list.add(-4);

console.log(list.element)

 console.log(detectCycle(list)) 

function detectCycle (head) {
  let target = targeted(head)
  let current = head;

  while (current !== null && target !== null) {
    if (current === target && current != null && target != null) {
      return current
    }
    current = current.next
  }

  return null;
};

function targeted(head) {
  var slow  = fast = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return slow
    }
  }
  return null;
}

