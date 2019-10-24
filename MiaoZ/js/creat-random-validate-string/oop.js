//抽象

const width = 200,height = 50;

class Gcode{
  constructor(el){
    this.$el = document.getElementById(el);
    this.ctx = this.$el.getContext('2d');
    this.$el.height = width;
    this.$el.height = height;
    console.log();
    this.drawLine();
    this.drawText();
    this.$el.addEventListener('click',()=>{
      this.ctx.clearRect(0,0,width,height);
      this.drawLine();
      this.drawText();
    })
  }
  drawLine() {
    for (let i = 0; i < 6; i++) {
      let beginX = Math.random()*200;
      let beginY = Math.random()*50;
      let endX = Math.random()*200;
      let endY = Math.random()*50;
      this.ctx.beginPath();
      this.ctx.moveTo(beginX, beginY);
      this.ctx.lineTo(endX,endY);
      this.ctx.strokeStyle=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
      this.ctx.stroke();
    }
  }
  
  drawText() {
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
    for (let i = 0; i < result.length; i++) {
        //
        this.ctx.font = '40px Helvetica';
        this.ctx.fillStyle=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        this.ctx.textBaseLine = 'middle'; // top bottom
        let preWidth = width /4 - 10;
        this.ctx.fillText(result[i], Math.random()*preWidth+i*preWidth,height/2)
    }
  }
}


//生成实例
let obj= new Gcode('screen');



let obj1= new Gcode('screen1');

let obj2= new Gcode('screen2');