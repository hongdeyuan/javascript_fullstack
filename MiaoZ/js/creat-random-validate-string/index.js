const canvans = document.getElementById("screen");

const ctx = canvans.getContext("2d");
const width = 200,height = 50;
ctx.width = width+"px";
ctx.height = height+"px";

canvans.addEventListener('click',function(){
  ctx.clearRect(0,0,width,height);
  drawLine();
  drawText();
})
drawLine();

function drawLine() {
  for (let i = 0; i < 6; i++) {
    let beginX = Math.random()*200;
    let beginY = Math.random()*50;
    let endX = Math.random()*200;
    let endY = Math.random()*50;
    ctx.beginPath();
    ctx.moveTo(beginX, beginY);
    ctx.lineTo(endX,endY);
    ctx.strokeStyle=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    ctx.stroke();
  }
}


drawText();

function drawText() {
  var sourceText = [
    'a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'o', 'p',
    'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'];

  //随机 不重复
  let result = [];
  for (let i = 0; i < 4; i++) {
      const idx = Math.floor(Math.random() * sourceText.length); //随机取整
      result.push(sourceText[idx]);
      //删除重复
      sourceText.splice(idx, 1);
  }
  console.log('result', result)
  for (let i = 0; i < result.length; i++) {
      //
      ctx.font = '40px Helvetica';
      ctx.fillStyle=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
      ctx.textBaseLine = 'middle'; // top bottom
      let preWidth = width /4 - 10;
      ctx.fillText(result[i], Math.random()*preWidth+i*preWidth,height/2)
      

  }
}

