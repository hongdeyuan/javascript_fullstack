(function(window, document) {
    var prefixes = ['Webkit', 'Moz', 'ms', 'o'],
        book = document.querySelectorAll('.book')[0],
        page = document.querySelectorAll('.front-cover')[0],
        dino = document.querySelectorAll('.dino')[0],
        shadow = document.querySelectorAll('.shadow')[0],
        hold = false,
        centerPoint = window.innerWidth / 2,
        pageSize = 300,
        clamp = function(val, min, max) {
            return Math.max(min, Math.min(val, max))
        }

    // 按下鼠标时候的执行事件
    page.onmousedown = function() {
            hold = true
        }
        // 鼠标放开的时候执行的事件
    window.onmouseup = function() {
            if (hold) {
                hold = false
            }
        }
        // 在窗口被调整大小的时候执行的事件
    window.onresize = function() {
        // console.log(123)
        centerPoint = window.innerWidth / 2
    }
    window.onmousemove = function(evt) {
        if (!hold) {
            return
        }
        // console.log(evt)
        var angle = clamp((centerPoint - evt.pageX + pageSize) / pageSize * -90, -180, 0),
            i, j;
        for (i = 0; i < prefixes.length; i++) {
            page.style[prefixes[i] + 'Transform'] = 'rotateY(' + angle + 'deg)';
            dino.style[prefixes[i] + 'Transform'] = 'rotateX(' + angle / 2 + 'deg)';
            book.style[prefixes[i] + 'Transform'] = 'rotateX(' + (60 + angle / 10) + 'deg)';
            shadow.style[prefixes[i] + 'Transform'] = 'translateZ(1px) skew(' + (angle / 8) + 'deg)';
        }
    }





})(window, document)