let sum = 0;
for (let i = 0; i < 100000; i++) {
  sum += i;
}

// 线程之间通信  发出信息
this.postMessage(sum);

// 接受信息
this.onmessage = function (e) {
  this.console.log(e.data)
}