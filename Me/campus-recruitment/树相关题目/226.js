var invertTree = function(root) {
  function swap(node) {
    if (!node) return
    // 交换 利用数组结构
    [node.left, node.right] = [node.right, node.left]
    swap(left)
    swap(right)
  }
  swap(root)

  return root
};