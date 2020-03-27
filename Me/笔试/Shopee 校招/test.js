var readline = require('readline');
rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var x
var y
var n

// rl.on('line', function(line){
//   let firstLines = line.split(' ');
//   x = parseInt(firstLines[0]);
//   y = parseInt(firstLines[1]);
//   n = parseInt(firstLines[2]);
   
// });

// console.log(x, y, n)

var K = 2; // 输入K行，输入有几行，k就为几行
var inputs = [];
var read = readline().split(' ');
var x = parseInt(read[0]);
var y = parseInt(read[1]);
var n = parseInt(read[2]);

for(var num=0;num<n;num++){
  var read1 = readline().split(' ');
  var a = parseInt(read1[0]);
  var b = parseInt(read1[1]);
  dp[a][b]=-1;
}