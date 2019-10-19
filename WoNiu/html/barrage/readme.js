let data = [
  {value: '周杰伦的听妈妈的话，唱得还不错！',time: 5,color: 'red',speed: 2,fontSize:22},
  {value: '唱得还不错！',time: 15,color: '#FFFF00',speed: 3,fontSize:22},
  {value: '你能唱得再差点吗？',time: 8,color: '#FF6A6A',speed: 6,fontSize:22},
  {value: '周周，加油！',time: 13}
]

//获取需要得DOM结构
let canvas = document.getElementById('canvas')
let video = document.getElementById('video')
let $txt = document.getElementById('text')
let $btn = document.getElementById('btn')
let $color = document.getElementById('color')
let $range = document.getElementById('range')

//定义CanvasBarrage类
class CanvasBarrage{
  //constructor器 -> 用来创建 构造函数 
  constructor(canvas,video,opts={}){
    //canvas,video 都没传
    if (!canvas || !video) {
      return
    }
    //增加属性，挂载在this上
    this.video = video
    this.canvas= canvas
    this.canvas.width = video.width
    this.canvas.height = video.height
    //获取画布
    this.ctx = canvas.getContext('2d')


    //设置默认参数 如果没有传参，就使用默认参数
    let defOpts = {
      color: '#e91e63',
      speed: 1.5,
      opacity: 0.5,
      fontSize: 20,
      data: []
    }

    //合并对象 ，全部挂载在this的实例上 Object.assign(): 合并对象
    Object.assign(this,defOpts,opts)

    //添加属性 用来判断播放状态 默认true 是暂停
    this.isPaused = true
    //获取 所有的弹幕消息 .map 遍历数组
    this.barrages = this.data.map(item =>  new Barrage(item,this))
    //渲染弹幕 render()
    this.render()
  }

  //render()方法
  render() {
    //先清除原有的画布clear()自定义的
    this.clear()
    //渲染弹幕randerBarrage()
    this.renderBarrage()
    //如果没有暂停 继续渲染
    if (this.isPaused === false) {
      //requestAnimationFrame : 请求动画帧 将动画细致化  bind(this) -> 保证this作用域不被修改 ， bind,call ,apply
      requestAnimationFrame(this.render.bind(this))
    }
  }

  clear() {
    //清除画布
    this.ctx.clearRect(0, 0, this.canvas.width,this.canvas.height)
  }

  
  renderBarrage() {
    //根据视频播放的时间和弹幕展示的时间 作比较 判断 是否展示弹幕
    let time = this.video.currentTime
    this.barrages.forEach(barrage => {
      //只有在视频播放的时间大于等于弹幕展示的时间 才做处理
      if (barrage.flag && time >= barrage.time) {
        //判当前弹幕是否初始化了  init()初始化函数
        if (!barrage.isInit) {
          barrage.init()
          barrage.isInit = true
        }

        //弹幕从右往左渲染 所以X轴坐标 减去当前弹幕的速度(speed)
        barrage.x -= barrage.speed
        //调用渲染
        barrage.render()

        //如果当前弹幕X坐标自身宽度还小 ， 渲染结束（此时弹幕出去屏幕了）
        if (barrage.x < -barrage.width) {
          barrage.flag = true

        }
      }
    });
    
  }

  add(obj) {
    this.barrages.push(new Barrage(obj,this))

  }
}

//Barrage 类 用来实例化 每一条弹幕
class Barrage{
  constructor(obj,ctx){
    this.value = obj.value
    this.time = obj.time
    this.obj  = obj
    this.context = ctx
  }

  init(){

    //如果数据里没有涉及到以下值，就取默认值
    this.color = this.obj.color || this.context.color
    this.speed = this.obj.speed || this.context.speed
    this.opacity = this.obj.opacity || this.context.opacity
    this.fontSize = this.obj.fontSize || this.context.fontSize

    let p = document.createElement('p')
    p.style.fontSize = this.fontSize + 'px'
    p.innerHTML = this.value
    document.body.appendChild(p)
    this.width = p.clientWidth
    document.body.removeChild(p)

    //设置弹幕出现的位置
    this.x = this.context.canvas.width
    this.y = this.context.canvas.height * Math.random()

    if (this.y < this.fontSize) {
      this.y = this.fontSize
    }else if (this.y > this.context.canvas.height - this.fontSize) {
      this.y = this.context.canvas.height - this.fontSize
    }
  }

  //渲染每一条弹幕
  render() {
    //设置画布/字体
    this.context.ctx.font = `${this.fontSize}px Arial`
    //设置画布的文字颜色
    this.context.ctx.fillStyle = this.color
    //绘制文字
    this.context.ctx.fillText(this.value, this.x,this.y)

  }
}

let canvasBarrage = new CanvasBarrage(canvas,video,{ data })
video.addEventListener('play',() => {
  canvasBarrage.isPaused = false
  canvasBarrage.render()//触发弹幕

})

//发送弹幕
function send() {
  let value = $txt.value
  let time = video.currentTime
  let color = $color.value
  console.log($range.value)
  let fontSize = $range.value
  let obj = {value,time,color,fontSize}
  canvasBarrage.add(obj)
}

$btn.addEventListener('click',send)