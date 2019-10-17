const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

speed.addEventListener('mousemove', handleMove);

function handleMove(e) {
    // console.log(e);
    // offsetTop:为容器浏览器距离顶部的距离
    const y = e.pageY - this.offsetTop;
    const precent = y / this.offsetHeight;
    const minSpeed = 0.4;
    const maxSpeed = 4;
    const height = Math.round(precent * 100) + '%';
    const playBackRate = precent * (maxSpeed - minSpeed) + minSpeed;
    // console.log("precent: \t" + precent + "%");
    bar.style.height = height;
    video.playbackRate = playBackRate.toFixed(2);
    // toFixed(2)保留2位小数
    bar.textContent = playBackRate.toFixed(2) + 'x';
}