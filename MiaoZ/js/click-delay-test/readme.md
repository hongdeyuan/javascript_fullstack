## 检测 点击延迟 300ms  移动端
 - 执行顺序 
 - 1. touchStart
 - 2. touchMove
 - 3. touchEnd
      300ms 之后
 - 4. click

## 解决方式
 - e.preventDefault()： 取消事件的默认动作
    如果需要 触发需要的事件 ，可以直接调用相关事件句柄 如 click
 - 方式一： 
    // 阻止click
    e.preventDefault();
    // 1. 手动触发
    document.getElementById('clickMe').click(); 
 -方式二
    // 2. 自定义事件  MouseEvents: 鼠标事件
    let event = document.createEvent('MouseEvents');
    // 具体化 事件 click  参数二 ： true  表示允许冒泡
    event.initEvent('click', true, true);
    // dispatchEvent 派发事件
    document.getElementById('clickMe').dispatchEvent(event);