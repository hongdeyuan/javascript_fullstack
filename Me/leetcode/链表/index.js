class Node {
  constructor(ele) {
    this.ele = ele
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }
  
  append(ele) {
    const node = new Node(ele)
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

  // 任意位置插入元素
  insert (position, ele) {
    if (position >= 0 && position <= this.length) {
      const node = new Node(ele)
      let cur = this.head
      let pre = null
      let index = 0
      if (position === 0) {
        this.head = node
      } else {
        while (index++ < position) {
          pre = cur
          cur = cur.next
        }
        node.next = cur
        pre.next = node
      }
      this.length ++
      return true
    }
    return false
  }

  // 移除指定位置元素
  removeAt (position) {
    // 检查越界值
    if (position > -1 && position < this.length) {
      let cur = this.head
      let pre = null
      let index = 0
      if (position === 0) {
        this.head = cur.next
      } else {
        while (index++ < position) {
          pre = cur
          cur = cur.next
        }
        pre.next = cur.next
      }
      this.length --
      return cur.ele
    }
    return null
  }

  // 寻找链表元素下标
  findIndex (ele) {
    let cur = this.head
    let index = -1
    while (cur) {
      if (ele === cur.ele) {
        return index + 1
      }
      index ++ 
      cur = cur.next
    }

    return -1
  }

  // 删除指定的文档
  remove (ele) {
    const index = this.findIndex(ele)
    return this.removeAt(index)
  }

  // 是否为空
  isEmpty() {
    return !this.length
  }

  // 长度大小
  size() {
    return this.length
  }

  // 转字符串
  toString() {
    let cur = this.head
    let str = ''
    while(cur) {
      str += `${cur.ele}`
      cur = cur.next
    }

    return str
  }
}

const list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)


console.log(list, list.findIndex(3))