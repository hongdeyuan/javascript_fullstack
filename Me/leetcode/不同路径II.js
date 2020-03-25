/**
 * [
 *  [0,0,0],
 *  [0,1,0],
 *  [0,0,0]
 * ]
 * 
 */
let obstacleGrid = [[0, 0, 0, 0, 1, 0],[0, 0, 1, 0, 0, 0],[0, 0, 0, 0, 0, 0]]

var uniquePathsWithObstacles = function (obstacleGrid) {
  var LenX = obstacleGrid.length
  var LenY = obstacleGrid[0].length
  let res = new Array(LenX).fill(new Array(LenY).fill(0))
  for (let i = 0; i < LenX; i++) {
    for (let j = 0; j < LenY; j++) {
      if (obstacleGrid[i][j] === 0 && i === 0 && j === 0) {
        res[i][j] = 1
      }
      if (obstacleGrid[i][j] === 0 && i === 0 && j > 0) {
        res[i][j] = res[i][j - 1]
      }
      if (obstacleGrid[i][j] === 0 && j === 0 && i > 0) {
        res[i][j] = res[i - 1][j]
      }
      if (obstacleGrid[i][j] === 1 && j > 0 && i > 0) {
        res[i][j] = 0
      }
      if (obstacleGrid[i][j] === 0 && j > 0 && i > 0) {
        res[i][j] = res[i - 1][j] + res[i][j - 1]
      }
    }
  }
  return res[LenX - 1][LenY - 1]
};

// 优化版
var uniquePathsWithObstacles1 = function (obstacleGrid) {
  // 获取终点的坐标
  let endX = obstacleGrid.length - 1,
    endY = obstacleGrid[0].length - 1
  let F = (x, y) => {
    // 如果当前位置的坐标存在负值，说明越界，直接返回0
    if (x < 0 || y < 0) return 0
    // 如果当前的值为1，就不需要计算到当前位置所需要的情况
    if (obstacleGrid[x][y] === 1) return 0
    // 如果已经递归至起点，就说明到下一步的步数为1
    if (x === 0 && y === 0) return 1
    // 到当前位置的所有情况数是到当前位置的正上方的所有情况+到左方的虽有情况数的和
    return F(x - 1, y) + F(x, y - 1)
  }
  return F(endX, endY)
};


console.log(uniquePathsWithObstacles(obstacleGrid))