// miniprogram/pages/brush/brush.js
const txvContext = requirePlugin("tencentvideo");
const config = require('../../modules/config')
Page({

  /**
   * 页面的初始数据d0032x85stp
   */
  data: {
    tvphide: false,
    vid: 'n00322mspyk',
    title: "全屏时会显示的视频title",
    defn: "超清",
    changingvid: '',
    controls: !!config.get('controls'),
    autoplay: !!config.get('autoplay'),
    playState: '',
    showProgress1: true,
    width: "100%",
    height: "auto"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      controls: !!config.get('controls'),
      autoplay: !!config.get('autoplay')
    })
    this.txvContext = txvContext.getTxvContext('txv0');
    this.txvContext.play();
  },
  onStateChange: function (e) {
    this.setData({
      playState: e.detail.newstate
    })
  },
  onTimeUpdate: function (e) {
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
  onFullScreenChange: function () {
    console.log('onFullScreenChange!!!')
  }
})