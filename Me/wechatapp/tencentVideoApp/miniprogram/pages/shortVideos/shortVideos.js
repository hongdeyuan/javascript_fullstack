// miniprogram/pages/shortVideos/shortVideos.js
const shortCategory = require('../../data/shortCategory.js')
const video = require('../../data/videoUrl.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shortCategory: shortCategory,
    curentIndex: 0,
    video: video,
    swiper_height: 80,
    scrollTop: 0,
    ch: 0,
    curentIndex: 0,
    currentVid: 1
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
  onPicClick(e) {
        let dataset = e.currentTarget.dataset;
        this.currIndex=dataset.index
        this.setData({
            "currVideo.vid":dataset.vid
        })
        this.getTop()
    },
  getTop(){
      let query = this.createSelectorQuery();
      query.selectViewport().scrollOffset();
       query
          .selectAll(`.mod_poster`)
          .boundingClientRect()
          .exec(res => {
          let originTop = res[0].scrollTop;
          let currNode = res[1][this.currIndex];
          console.log('111',originTop,currNode)
          this.setData({
            top:currNode.top+originTop
          })
      });
  },

  /**
   * 生命周期函数--监听页面加载application/json  application/x-www-form-urlencode
   */
  onLoad: function (options) {

    wx.getSystemInfo({
      success: res => {
        //转为rpx
        let ch = (750 / res.screenWidth) * res.windowHeight - 180;
        this.setData({
          ch
        })
      },
    })

    this.videoContext = wx.createVideoContext('tvp');
      
  },
  /**
   * --监听页面滚动完成菜单固定
   */
  onPageScroll: function (e) {
    console.log(e.scrollTop)
    this.setData({
      scrollTop: e.scrollTop
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