function myready(fn) {

    //对于现代浏览器 ，对DOMContentLoaded事件的处理采用标准的事件绑定方式
    if (document.addEventListener) {
        document,
        addEventListener("DOMContentLoaded", fn, false);
    }
    else {
        IEContentLoaded(fn);
    }
    // IE模拟DOMContentLoaded
    function IEContentLoaded(fn) {
        var done = false
            // 只执行一次用户的回调函数init
        var init = function() {
            if (!done) {
                done = true;
                fn();
            }
        };


        //立即执行函数
        (function() {
            try {
                //DOM树未创建完之前调用doScroll会抛出错误
                document.documentElement.doScroll('left');
            } catch (error) {
                //延迟再试一次
                setTimeout(arguments.callee, 50);
                return;
            }
            // 没有错误就表示DOM树创建完毕，然后立马执行用户回调函数
        })()


        // 监听document的加载状态
        document.onreadystatechange = function() {
            // 如果用户是在domready之后绑定的函数，就立马执行
            if (document.readyState === 'complete') {
                document.onreadystatechange = null;
                init();
            }
        }
    }
}