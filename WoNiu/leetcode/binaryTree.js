// 二叉树
var tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}

// 前序遍历 + 递归
var preOrder = function (node) {
  if (node) {
    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
  }
  
}


//非递归： 遍历 + 栈
// 深度优先：一棵树到底
// 广度优先：共同推进

// 深度优先
var preOrderUnRecur = function (node) {
  if (!node) {
    throw new Error('Empty Tree')
  }
  // 栈
  var stack = []
  stack.push(node)
  // 一般用 while 搭配 栈
  while (stack.length !== 0) {
    node = stack.pop()
    console.log(node.value)
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
}

// 广度优先 非递归

function  BreadthFirstUnRecur(biTree) {
  if (!biTree ) {
    throw new Error('Empty Tree')
  }
  // 栈
  var stack = []
  stack.push(biTree)
  while (stack.length !== 0) {
    let node = stack.shift()
    console.log(node.value)
    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }
}


BreadthFirstUnRecur(tree)
