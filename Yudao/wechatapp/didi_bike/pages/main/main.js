// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [],
    latitude: 28.728058,//维度
    longitude: 115.816767,//经度
    scale: 16
  },
  toMsg(){
    
  },
  toUser(){

  },
  toReset(){
    //但你使用地图来来去去的，再回到原始起点
    this.mapCtx.moveToLocation();
    this.setData({
      scale:16
    })
    
  },
  tocreateMarkers(longitude,latitude){
    let markers = [{
      "id":1,
      "iconPath":"/images/map-bicycle.png",
      "latitude":latitude,
      "longitude":longitude,
      "width":52.5,
      "height":30,
      "callout":{}
    }]
    this.setData({
      markers
    })

  },
  toVisit(e){
    console.log(e);
  },
  toScan(){
    return wx.scanCode({
      onlyFromCamera: false,
      scanType: ['qrCode', 'barCode', 'datamatrix', 'pdf417'],
      success: (res) => {
        console.log(res);
        wx.showModal({
          title: 'sacn',
          content: JSON.stringify(res),
          showCancel: false,
          confirmText: '确定',
          confirmColor: '#3CC51F',
          success: (result) => {
          }
        });
          
      },
      fail: () => {},
      complete: () => {}
    });
      
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //微信赋予小程序可以调用的API
    wx.showLoading({
      title: '获取坐标中',
      mask: true,
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });

    //手机的GPS
    wx.getLocation({
      type: 'gcj02',
      altitude: false,
      success: (res) => {
        //解构赋值
        let {longitude,latitude} = res;
        this.tocreateMarkers(longitude,latitude);
        // console.log(longitude,latitude);
        // var latitude = res.latitude;
        // var longitude = res.longitude;
        this.setData({
          latitude:latitude,
          longitude:longitude
        },() =>{
          wx.hideLoading();
        })

      },
      fail: () => {},
      complete: () => {}
    });

      
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //地图上下文环境
    this.mapCtx = wx.createMapContext('myMap');
      
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