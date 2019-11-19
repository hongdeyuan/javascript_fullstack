// pages/shortVideo/index.js
const config = require('../../modules/config')
const txvContext = requirePlugin("tencentvideo");
const sysInfo =wx.getSystemInfoSync()
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
    ch: 0,
    top: 0,
		currVideo:{}
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
  onTvpTimeupdate: function(){
  },
  onTvpPlay: function () {
  },
  onTvpPause: function () {
  },
  onTvpContentChange: function () {
  },
  onTvpStateChanage: function () {
  },
  onPicClick(e) {
    let dataset = e.currentTarget.dataset;
    this.currIndex=dataset.index
    this.setData({
        "currVideo.vid":dataset.vid
    })
    console.log(this.data.currVideo)
    this.getTop()
  },
  getTop(){
      let query = this.createSelectorQuery();
      query.selectViewport().scrollOffset();
      query
          .selectAll(`.mod_poster`)
          .boundingClientRect()
          .exec(res => {
            console.log(res)
            console.log(res[0].scrollTop, res[1][this.currIndex].top)
            let originTop = res[0].scrollTop;
            this.setData({
                top: originTop + this.currIndex * 224.5
            })
          });
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

    this.videoContext = wx.createVideoContext('tvp');

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