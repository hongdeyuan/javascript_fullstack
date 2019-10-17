// console.log(a);
// var a = 1;
// 步骤解析--->  只有var 才会这样解析
// var a;
//console.log(a)
//a=1

// var arr = [1, 2, 3, 4, 5]
// arr.sort((a, b) => a - b); a-b 为升序，b-a为降序
// arr.sort((a, b) => 0.5 - Math.random());乱序 随机排序  伪随机 不是真正的随机

let wrap = document.getElementById('wrap');


let images = [
    './images/h1.jpg',
    './images/h2.jpg',
    './images/h3.jpg',
    './images/h4.jpg',
    './images/h5.jpg',
    './images/h6.jpg',
    './images/h1.jpg',
    './images/h2.jpg',
    './images/h3.jpg',
    './images/h4.jpg',
    './images/h5.jpg',
    './images/h6.jpg'
]

let rotates = [
    'rotateY-animation',
    'rotateX-animation'
]

let count = 0;

let firstCard = null;

let firstId = null;



init();
let allImg = document.querySelectorAll('#wrap img');

function init() {
    images.sort((a, b) => 0.5 - Math.random());
    for (let i = 0; i < 12; i++) {
        //DOM操作 
        let img = document.createElement('img'); // 相当于 html加一个 <img src="" class="" />
        img.src = './images/bg.jpg';
        img.onclick = function() {
            changeImage(img, i);
        }
        wrap.appendChild(img);
    }
}

var changeImage = (imgNode, i) => {
    if (count === 0) {
        //翻第一张
        firstCard = images[i];
        firstId = i;
        imgNode.src = images[i];
        imgNode.classList.add(rotates[Math.floor(Math.random() * 2)]);
    }
    if (count === 1) {
        //翻第二张
        if (!(i === firstId)) {
            imgNode.src = images[i];
            imgNode.classList.add(rotates[Math.floor(Math.random() * 2)]);
            setTimeout(() => {
                if (firstCard === images[i]) {
                    wrap.removeChild(allImg[firstId]);
                    wrap.removeChild(allImg[i]);

                } else {
                    allImg[firstId].className = '';
                    allImg[i].className = '';
                    allImg[firstId].src = './images/bg.jpg';
                    allImg[i].src = './images/bg.jpg';
                }
                count = 0;
                firstId = null;
                firstCard = null;

            }, 1100);
        }
    }
    count++;

}

// var changeImage = function(imgNode) {
//     imgNode.src = './images/h1.jpg';
// }

// function changeImage() {
//     imgNode.src = './images/h1.jpg';
// }