const tree = {
  val: 1,
  left:{
    val: 2,
    left: {
      val: 4,
      left: {
        val: 5
      },
      right: {
        val: 6,
        left: {
          val: 8
        }
      }
    },
    right: {
      val: 7,
      right:{
        val: 9
      }
    }
  },
  right: {
    val: 3
  }
}
let arr = []
// 可能会爆栈
// 手动维护栈
// 先序遍历
const preOrder = function (tree) {
  if (tree) {
    arr.push(tree.val)
    preOrder(tree.left)
    preOrder(tree.right)
  }
}
// preOrder(tree)
// console.log(arr)

// 非递归 深度优先
const preOrderUnRecur = function (tree) {
  var stack = []
  stack.push(tree)
  while (stack.length !== 0) {
    tree = stack.pop()
    arr.push(tree.val)
    if (tree.right) {
      stack.push(tree.right)
    }
    if (tree.left) {
      stack.push(tree.left)
    }
  }
}
// preOrderUnRecur(tree)
// console.log(arr)

// 广度优先

const BreadthFirstUnRecur = function (tree) {

  if (!tree) {
    throw new Error('tree is null')
  }

  let stack = []
  stack.push(tree)
  while (stack.length !== 0) {
    let node = stack.shift()
    arr.push(node.val)
    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }
  
}

BreadthFirstUnRecur(tree)
console.log(arr)
// 爆栈实现
// function foo() {
//   foo()
// }
// foo()

// 非递归
