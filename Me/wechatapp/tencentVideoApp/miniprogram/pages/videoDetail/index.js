// pages/videoDetail/index.js
const entities = require('../../data/entities.js')
const cars = require('../../data/detail.js')
const txvContext = requirePlugin("tencentvideo");
const config = require('../../modules/config')

let currentVideo;

Page({

  /**
   * 页面的初始数据
   */
  data: {
        entitie: null,
        id: null,
        entities,
        currentVid:null,
        episodes:[
          {
            num:1,
            vid: 'n003297kilf'
          },
          {
            num:2,
            vid: 'i0032carjfk'
          },{
            num:3,
            vid: 'r0032hv0gd5'
          },{
            num:4,
            vid: 'm0032ogkrbo'
          },{
            num:5,
            vid: 'x0032sp4x8h'
          },{
            num:6,
            vid: 's0032thyy8b'
          },{
            num:7,
            vid: 'x0032jrra8o'
          },{
            num:8,
            vid: 'h0032w6grwg'
          },{
            num:9,
            vid: 'b003206mdos'
          },{
            num:10,
            vid: 'd0032kjdt4y'
          }
        ],
        tvphide: false,
        vid: 'n003297kilf',
        title: "全屏时会显示的视频title",
        defn: "超清",
        changingvid: '',
        controls: !!config.get('controls'),
        autoplay: !!config.get('autoplay'),
        playState: '',
        showProgress1: true,
        width: "100%",
        height: "auto",
        car:{}
  },

  play(event){
    const target = event.target;
    const currentVid = target.dataset.vid;
    if(this.data.currentVid!=null){
      currentVideo.pause();
    }
    if(currentVid){
      currentVideo = wx.createVideoContext(`${currentVid}`);
      this.txvContext.pause();
      currentVideo.play();
    }
    this.setData({
      currentVid
    })
  },

  select(e){
    const target = e.target;
    const currentVid = target.dataset.vid;
    console.log(currentVid);
    this.setData({
      vid: currentVid
    })
    this.txvContext = txvContext.getTxvContext('txv0');
    this.txvContext.play();
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

    this.setData({
      controls: !!config.get('controls'),
      autoplay: !!config.get('autoplay')
    })
    this.txvContext = txvContext.getTxvContext('txv0');
    this.txvContext.play();


    // let entitie = entities.find(function(item){
    //   return item.id == id;
    // })
    // this.setData({
    //   entitie
    // })


  },
  onStateChange: function (e) {
    this.setData({
      playState: e.detail.newstate
    })
  },
  onTimeUpdate: function (e) {
  },
  onStateChange: function (e) {
		this.setData({
			playState: e.detail.newstate
		})
	},
  requestFullScreen: function () {
		this.txvContext.requestFullScreen();
  },
	onFullScreenChange: function () {
		console.log('onFullScreenChange!!!')
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