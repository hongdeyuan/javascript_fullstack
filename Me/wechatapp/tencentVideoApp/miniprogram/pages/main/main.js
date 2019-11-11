// miniprogram/pages/main/main.js
const moviesCategory = require('../../data/moviesCategory.js')
const handpickSwiperUrl = require('../../data/handpickSwiperUrl.js')
const handpickChasingsUrl = require('../../data/handpickChasingsUrl.js')
const handpickHotChasingsUrl = require('../../data/handpickHotChasingsUrl.js')
const teleplaySwiperUrl = require('../../data/teleplaySwiperUrl.js')
const teleplayCanChasingsUrl = require('../../data/teleplayCanChasingsUrl.js')
const teleplayHeavysUrl = require('../../data/teleplayHeavysUrl.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moviesCategory: moviesCategory,
    curentIndex: 0,
    movieUrls: handpickSwiperUrl,
    videoUrls: teleplaySwiperUrl,
    videoOnChasings: handpickChasingsUrl,
    videoCanChasings: teleplayCanChasingsUrl,
    videoHeavys: teleplayHeavysUrl,
    videoHotChasings: handpickHotChasingsUrl,
    toView:'handpick',
    swiper_height: 80,
    scrollTop: 0,
    ch: 0
  },
  gotoDetail(event){
    const id = event.target.dataset.id;

    console.log('id :\t'+id);

    wx.navigateTo({
      url:`/pages/videoDetail/index?id=${id}`
    })
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
  // 点击跳转到搜索页面
  go_search: function() {
    wx.navigateTo({
      url: '../search/search',
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

    // wx.request({
    //   url: 'https://v.qq.com/x/search/?q=斗破',
    //   method: 'get',
    //   data: {},
    //   header: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   success: (res) => {
    //     // success
    //     console.log(res)
    //   },
    //   fail: () => {},
    //   complete: () => {}
    // });
      
  },
  /**
   * --监听页面滚动完成菜单固定
   */
  onPageScroll: function (e) {
    // console.log(e.scrollTop)
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