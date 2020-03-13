# 节流与防抖
  
  > 在前端开发中为了解决用户会频繁的触发事件执行所导致的一系列性能问题，开发员们引入了函数节流(throttle)和函数防抖(debounce)概念

## 函数节流(throttle)
  
  > 函数节流就是指每隔都多少时间 去执行某个函数,具体实现如下：

  ```js
    const container = document.getElementById('container');
    let init = 0;
    let previous = 0;
    function buyitnow() {
      let now  = new Date().getTime();
      if (now - previous >= 1000) {
        container.innerHTML = init ++;
        previous = now;
      }
    }

    container.onmousemove = buyitnow;
  ```

## 函数防抖(debounce)

  > 每次都是新的时间去执行：假如在设定的时间内又有时间触发则有重新 从 0开始计时到指定时间后 ，才触发。具体实现如下：

    ```js
    function debounce(func, delay) {
      let timeout;
      // onclick onmousemove 调用
      return function (e) {
        if (timer) {  
          clearTimeout(timer);
        }
        timeout = setTimeout(() => {
          func(e);
        }, delay);
      }
    }
    function buy(e) {
      console.log(24, e)
    }
    const buys = document.getElementById('buyItnow')
    buys.onclick = debounce(buy, 1500);
  ```
