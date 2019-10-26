// miniprogram/pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    const self = this;
    //展示标题栏的loding
    wx.showNavigationBarLoading();

    //调用云函数
    wx.cloud.callFunction({
      name: 'getGroup',
      data:{},
      success(res){
        console.log(res);
        self.setData({
          groupList: res.result
        })
      },
      fail(err){
        console.log(err);
      },
      complete(){
        //让 loding消失
        wx.hideNavigationBarLoading();

      }
    })
      
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