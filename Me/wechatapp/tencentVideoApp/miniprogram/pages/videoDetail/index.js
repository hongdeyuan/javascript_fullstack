// pages/videoDetail/index.js
const entities = require('../../data/entities.js')

let currentVideo;

Page({

  /**
   * 页面的初始数据
   */
  data: {
        entitie: null,
        id: null,
        currentVid:null 
  },

  play(event){
    const target = event.target;
    const currentVid = target.dataset.vid;
    if(this.data.currentVid!=null){
      currentVideo.pause();
    }
    if(currentVid){
      currentVideo = wx.createVideoContext(`${currentVid}`);
      currentVideo.play();
    }
    this.setData({
      currentVid
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id= options.id;
    //改变page里面的data
    this.setData({
      id
    })

    entities.find(function(item){
      return item.id == id;
    })
    let entitie = entities.find(function(item){
      return item.id == id;
    })
    this.setData({
      entitie
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