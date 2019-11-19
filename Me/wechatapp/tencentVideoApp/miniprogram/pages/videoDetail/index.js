// pages/videoDetail/index.js
const entities = require('../../data/entities.js')
const txvContext = requirePlugin("tencentvideo")
const config = require('../../modules/config')
const episodes = require('../../data/episodes.js')

let currentVideo;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    entitie: null,
    id: null,
    entities,
    clips: null,
    currentVid:null,
    episodes: null,
    tvphide: false,
    vid: null,
    title: "电视剧",
    defn: "超清",
    changingvid: '',
    controls: !!config.get('controls'),
    autoplay: !!config.get('autoplay'),
    playState: '',
    showProgress1: true,
    width: "100%",
    height: "auto",
    showModalStatus: false,
    car:{},
    detailOn: true,
    ch: 0,
    currentIndex: 0,
    top: 0,
		currVideo:{}
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
    const num = target.dataset.num;
    console.log(currentVid, num);
    this.setData({
      vid: currentVid,
      clips: this.data.episodes[num-1].clips
    })
    this.txvContext = txvContext.getTxvContext('txv0');
    this.txvContext.play();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //动态设置 详情的高度  防止滑动失效
    wx.getSystemInfo({
      success: res => {
        //转为rpx
        let ch = (750 / res.screenWidth) * res.windowHeight -478;
        this.setData({
          ch
        })
      },
    })


    const id= options.id;
    console.log('id', id);

    let episode = episodes.find(function(item){
      return item.id == id;
    })

    let entitie = entities.find(function(item){
      return item.id == id;
    })

    this.setData({
      entitie
    })
    //改变page里面的data
    this.setData({
      id: id,
      episodes: episode.episodes,
      vid: episode.episodes[0].vid,
      clips: episode.episodes[0].clips
    })
    // console.log('vid', this.data.vid);

    this.setData({
      controls: !!config.get('controls'),
      autoplay: !!config.get('autoplay')
    })
    this.txvContext = txvContext.getTxvContext('txv0');
    this.txvContext.play();
    this.videoContext = wx.createVideoContext('tvp');

  },
  onTvpPlay: function () {
    // console.log('play')
  },
  onStateChange: function (e) {
    this.setData({
      playState: e.detail.newstate
    })
  },
  onTvpContentChange: function () {
  },
  onTimeUpdate: function (e) {
  },
  requestFullScreen: function () {
		this.txvContext.requestFullScreen();
  },
	onFullScreenChange: function () {
		// console.log('onFullScreenChange!!!')
  },
  onTvpTimeupdate: function(){
  },
  onTvpPause: function () {
  },
  onTvpStateChanage: function () {
  },
  onPicClick(e) {
    let dataset = e.currentTarget.dataset;
    this.currIndex=dataset.index
    this.setData({
        "currVideo.vid":dataset.vid
    })
    // console.log(this.data.currVideo)
    this.getTop()
  },
  getTop(){
      let query = this.createSelectorQuery();
      query.selectViewport().scrollOffset();
      query
          .selectAll(`.mod_poster`)
          .boundingClientRect()
          .exec(res => {
            let originTop = 0;
            this.setData({
                top: originTop + this.currIndex * 224.5
            })
          });
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
    console.log('share success!')
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
      showModalStatus: true,
      detailOn: false
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

    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false,
        detailOn: true
      })
    }.bind(this), 200)
  },
  // 默认阻止滚动
  stopScroll() {
    return false;
  }
})