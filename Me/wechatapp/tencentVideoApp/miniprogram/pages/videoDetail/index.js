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
        currentVid:null,
        episodes:[
          {
            num:1
          },
          {
            num:2
          },{
            num:3
          },{
            num:4
          },{
            num:5
          },{
            num:6
          },{
            num:7
          },{
            num:8
          },{
            num:9
          },{
            num:10
          }
        ]
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

  },
  //显示对话框
 showModal: function () {
  // 显示遮罩层
  var animation = wx.createAnimation({
    duration: 200,
    timingFunction: "linear",
    delay: 0
  })
  this.animation = animation
  animation.translateY(300).step()
  this.setData({
    animationData: animation.export(),
    showModalStatus: true
  })
  setTimeout(function () {
    animation.translateY(0).step()
    this.setData({
      animationData: animation.export()
    })
  }.bind(this), 200)
},
//隐藏对话框
hideModal: function () {
  // 隐藏遮罩层
  var animation = wx.createAnimation({
    duration: 200,
    timingFunction: "linear",
    delay: 0
  })

  this.animation = animation;
  animation.translateY(300).step();

  this.setData({
    animationData: animation.export(),
  })

  console.log('hide')

  setTimeout(function () {
    animation.translateY(0).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: false
    })
  }.bind(this), 200)
}
})