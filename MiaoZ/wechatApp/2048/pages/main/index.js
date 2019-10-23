// pages/main/index.js
const Grid = require('./grid.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nums:null
  },
  game:null,
  startX: 0,startY:0,endX: 0,endY:0,
  addRandomData: function() {
    let cell = this.game.selectCell();
    console.log(cell);
    this.game.grid[cell.i][cell.j] = Math.random()>0.5 ? 2 : 4;
  },
  touchstart: function (e) {
    //取第一根手指
    const touch = e.touches[0];
    this.startX = touch.clientX;
    this.startY = touch.clientY;
  },
  touchmove: function (e) {
    const touch = e.touches[0];
    this.endX = touch.clientX;
    this.endY = touch.clientY;
  },
  touchend: function (e) {
    console.log(this.startX,this.startY,this.endX,this.endY);
    const disX = this.startX - this.endX;
    const disY = this.startY - this.endY;
    const absDisX = Math.abs(disX);
    const absDisY = Math.abs(disY);
    if (absDisX > 10 || absDisY > 10) {
      //0: 上  ； 1： 右  ；2 ：下 ； 3 ：左
      var direction = absDisX > absDisY ? (disX < 0 ? 1 : 3) : (disY < 0 ? 2 : 0 );
      console.log(direction);
      this.move(direction);
    }
  },
  move: function(direction) {
    //数字的合并
    this.combine();
  },
  combine: function () {
    //数字滑动
    let res =  this.slideNumber(['',2,'',2]);
    console.log("数字靠边",res);
  },
  slideNumber: function(arr) {
    //输入['',2,'',2]  数字靠边 输出 [2,2,'','']
    let current = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== '') {
        arr[current] = arr[i];
        current++;
      }
    }

    //此时[2,2,'',2]

    for (let j = current; j < arr.length; j++) {
      arr[j] = '';
    }

    return arr;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const gameGrid = new Grid(4);
    //两个格子
    this.game = gameGrid;
    this.addRandomData();
    this.addRandomData();
    this.setData({
      nums: gameGrid.grid
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})