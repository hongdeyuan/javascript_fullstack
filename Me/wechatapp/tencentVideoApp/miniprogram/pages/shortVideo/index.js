// pages/shortVideo/index.js
const config = require('../../modules/config')
const TxvContext = requirePlugin("tencentvideo");
const shortCategory = require('../../data/shortCategory.js')
const videoUrl = require('../../data/videoUrl.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curentIndex: 0,
    shortCategory: shortCategory,
    videos: videoUrl,
    ch: 0
  },
  //改变swiper
  swiperChange: function(e) {//切换
    if(e.detail.source == 'touch') {
      let curentIndex = e.detail.current;
      this.setData({
        curentIndex
      })
    }
  },
  switchTab(e){
    this.setData({
      curentIndex:e.currentTarget.dataset.index,
      toView: e.currentTarget.dataset.id
    })
  },
  onPlay: function (params) {
    let txvContext = TxvContext.getTxvContext('tvp') 
    // txv1即播放器组件的playerid值
    txvContext.play()
    console.log('play')
  },
  onContentChange: function (params) {
    
  },
  onEnd: function (e) {
    console.log(e)
    console.log('是否 是广告：', e.detail.isAd)
  },
  onPause: function (params) {
    let txvContext = TxvContext.getTxvContext('tvp') 
    // txv1即播放器组件的playerid值
    txvContext.pause()
    console.log('pause')
  },
  onStateChanage: function (params) {
    
  },
  onFullScreenChange: function (params) {
    console.log('Screen')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.getSystemInfo({
      success: res => {
        //转为rpx
        let ch = (750 / res.screenWidth) * res.windowHeight - 80;
        this.setData({
          ch
        })
      },
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

  },
  // 默认阻止滚动
  stopScroll() {
    return false;
  }
})