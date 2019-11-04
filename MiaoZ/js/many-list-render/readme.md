# 异步执行  & 同步执行
  - 同步 
    document.body.style.backgroundColor = 'red';
    document.body.style.backgroundColor = 'blue';

  - 异步
    document.body.style.backgroundColor = 'red';
    setTimeout(() => {
      document.body.style.backgroundColor = 'blue';
    },3000

    现象： 先看到 red
          再看到 blue
    说明： 在 setTimeout 之前 会发生一次 样式计算 浏览器并 渲染它
