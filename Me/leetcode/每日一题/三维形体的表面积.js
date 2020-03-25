// 思路： 先算所有表格中的表面积，再逐一减去相邻 最小 2个柱面积
var surfaceArea = function(grid) {
  var area = 0;
  var x = grid[0].length;
  var y = grid.length;
  for(var i = 0; i < grid.length; i++){
      for(var j = 0; j < grid[0].length; j++){
          if(grid[i][j] > 0){
              area += grid[i][j] * 4 + 2;
              if(i < y-1) area -= Math.min(grid[i][j], grid[i+1][j]) * 2;
              if(j < x-1) area -= Math.min(grid[i][j], grid[i][j+1]) * 2;
          }
      }
  }
  return area;
};