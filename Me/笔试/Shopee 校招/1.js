/**
 * 
 * 第一行 x y n： 3 3 2
 * n 行
 * 1 1
 * 2 2
 * 
 * 输出 4
 */

// var readline = require('readline');

// const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
// });

//[[1,1], [2,2]]

let example = [
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0]
]

example[1][1] = 1

console.log(example)


var uniquePathsWithObstacles = function (obstacleGrid) {
  var LenX = obstacleGrid.length
  var LenY = obstacleGrid[0].length
  
  let res = new Array(LenX+1).fill(new Array(LenY+1).fill(0))
  for (let i = LenX - 1  ; i >= 0; i--) {
    for (let j = LenY -1; j >= 0; j--) {
      if (obstacleGrid[i][j] === 0 && i === LenX -1 && j === LenY -1) {
        res[i][j] = 1
      }
      if (obstacleGrid[i][j] === 0 && i === LenX-1 && j < LenY -1) {
        res[i][j] = res[i][j + 1]
      }
      if (obstacleGrid[i][j] === 0 && j === LenY -1 && i < LenX-1) {
        res[i][j] = res[i + 1][j]
      }
      if (obstacleGrid[i][j] === 1 && j < LenY -1 && i < LenX -1) {
        res[i][j] = 0
      }
      if (obstacleGrid[i][j] === 0 && j < LenY -1 && i < LenX -1) {
        res[i][j] = res[i + 1][j] + res[i][j + 1]
      }
    }
  }
  return res[0][0]
};

// console.log(uniquePathsWithObstacles(example))


while(line=readline()){
  var lineNums = line.split(' ');
  var x = parseInt(lineNums[0]);
  var y = parseInt(lineNums[1]);
  var n = parseInt(lineNums[2]);
  
  let example = new Array(x+1).fill(new Array(y+1).fill(0))
  var NLines = []
  for(var i = 0;i < n; i++){
    var lines = readline().split(' ');
    for(var j = 0; j < lines.length; j++){
      NLines.push(lines[j]);
    }
      
    
    
    let X = parseInt(NLines[0])
    let Y = parseInt(NLines[1])
    print(X, Y, '-----')
    NLines = []
  }
  Math.floor
    
   print(example)
   

}