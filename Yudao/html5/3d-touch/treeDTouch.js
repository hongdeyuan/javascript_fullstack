const FRAME_WIDTH = 988 / 4,
    FRAME_HEIGHT = 1164 / 6, //
    MASK_WIDTH = 146; // 阴影

// 封装
class ThreeDTouch {
    // 构造函数
    constructor(el, callback) {
        this.el = el;
        this.callback = callback;
        this.bindEvents(); //调用对象上的bindEvents方法
    }
    bindEvents() {
        this.el.addEventListener('touchstart', () => {
            document.getElementById('force_val').innerHTML = event.touches[0].force;
        })
        this.el.addEventListener('touchforcechange', () => {
            alert('touch')
            document.getElementById('force_val').innerHTML = event.touches[0].force;
        })
    }
    ThreeDidStart() {
        console.log("点击了")
    }
    touchForeDisChange(event) {
        console.log("点击了")
        event.getElementById('force_val').innerHTML = event.touches[0].force;
    }
}
let toucher = new ThreeDTouch(document.getElementById('force_btn'), function() {

})
console.log(toucher);