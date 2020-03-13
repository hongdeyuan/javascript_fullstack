// 有一个2*n的网格，有一个人位于(1,1)的位置，即左上角，
// 他希望从左上角走到右下角，即(2,n)的位置。在每一次，他可以进行三种操作中的一种：

// 1． 向右走一格，即从(x,y)到(x,y+1);

// 2． 向上右方走一格，即，如果他在(2,y)的位置可以走到(1,y+1);

// 3． 向下右方走一格，即，如果他在(1,y)的位置可以走到(2,y+1);

// 问题当然不会这么简单，在这2*n的格子中，有一部分格子上有障碍物，
// 他不能停在障碍物上，当然也不能走出网格，请问他有多少种不同的路线可以到达(2,n)。

// 输入： 输入第一行仅包含一个正整数n，表示网格的长度。(1<=n<=50)

// 接下来有2行,每行有n个字符，“X”代表障碍物，“.”代表可以停留。

// 输出： 如果没有可以到达的路线则输出-1，否则输出方案数量


// var arr = new Array();
// for (let i = 0; i < 2; i++) {
//   arr[i] = new Array();
//   for (let j = 0; j < 5; j++) {
//     arr[i][j] = j;
//   }
// }

let arr = [ [ '.', '.', 'X', '.', 'X' ], [ 'X', '.', '.', '.', '.' ] ]

// console.log(arr[0][0])// .

function getCounts(arr, n) {
  let nodeVal = []
  let x =0 , y = 0, res = 1
  while (n !== 0) {
    let count = 0
    if (x === 0) {
      console.log(arr[0][0],arr[0][1],arr[0][2],arr[0][3],arr[0][4])
      if (arr[x][y+1] !== 'X' && arr[x+1][y+1] === 'X') {
        count = 1
        x = x + 1
        y = 0
      }else if (arr[x+1][y+1] !== 'X' && arr[x][y+1] === 'X') {
        count = 1
        y = 1
        x = x +1
      } else if (arr[x+1][y+1] !== 'X' && arr[x][y+1] !== 'X') {
        count = 2
        y = 1
        x = x +1
      }

    } else if (x === 1) {
      if (arr[x][y+1] !== 'X' && arr[x-1][y+1] === 'X') {
        count =1
        x = 0
        y = y + 1
      } else if (arr[x-1][y+1] !== 'X' && arr[x][y+1] === 'X') {
        count = 1
        x = 0
        y = y+1
      } else if (arr[x+1][y-1] !== 'X' && arr[x+1][y] !== 'X') {
        count = 2
        x = 0
        y = y+1
      }
    }
    n--
    nodeVal.push(count)
  }

  console.log(nodeVal)
  for (let i = 0; i < nodeVal.length; i++) {
    res *= nodeVal[i]
  }

  return res
}

console.log(getCounts(arr, 5))