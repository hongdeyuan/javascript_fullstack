const searchCategory = require('../../data/searchCategory.js')
const hotSearch = require('../../data/hotSearch.js')
Page({

  data: {
    hotvideos: [],// 获取热门搜索
    inputValue: null,// 输入框输入的值
    history: [], // 搜索历史存放数组
    searchCategory: searchCategory,// 搜索菜单栏
    searchsuggest: [], //搜索建议
    showView: true,// 组件的显示与隐藏
    showvideoresult: true,
    searchresult: [],// 搜索结果
    searchKey: [],
    hotSearch: hotSearch,// 热门搜索
    share: false,
    curentIndex: 0,
    ch: 0
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
  onLoad() {

    wx.getSystemInfo({
      success: res => {
        //转为rpx
        let ch = (750 / res.screenWidth) * res.windowHeight - 360;
        this.setData({
          ch
        })
      },
    })

    wx.showLoading({
      title: '加载中',
    });
    this.gethotvideos();//加载页面完成调用gethotvideos方法

  },

  // 从接口到获取到数据导入到hotvideos
  gethotvideos() {
    wx.hideLoading();
  },

  // 搜索建议
  searchSuggest() {

    const self = this;
    //展示标题栏的loding
    wx.showNavigationBarLoading();

    //调用云函数
    wx.cloud.callFunction({
      name: 'search',
      data:{ key: self.data.searchKey },
      success(res){
        // console.log(res);
        self.setData({
          showvideoresult: true,
          searchsuggest: res.result
        })
      },
      fail(err){
        // console.log(err);
        self.setData({
          showvideoresult: false
        })
      },
      complete(){
        //让 loding消失
        wx.hideNavigationBarLoading();
      }
    })
    
  },

  // 实现点击输入框的×把输入的内容清空
  clearInput: function (res) {
    this.setData({
      inputValue: '',
      share: false,
      showView: true,
      searchresult: []
    })
    this.onShow()
  },

  //实现取消功能，停止搜索，返回首页
  cancel: function () {
    wx.switchTab({
      url: '/pages/main/main'
    })
  },

  //获取input文本并且实时搜索,动态隐藏组件
  getsearchKey: function (e) {
    // console.log(e.detail.value) //打印出输入框的值
    let that = this;
    if (e.detail.cursor != that.data.cursor) { //实时获取输入框的值
      that.setData({
        searchKey: e.detail.value
      })
    }
    if (e.value != "") { //组件的显示与隐藏
      that.setData({
        showView: false,
        share: true
      })
    } else {
      that.setData({
        showView: ""
      })
    }
    if (e.detail.value != "") { //解决 如果输入框的值为空时，传值给搜索建议，会报错的bug
      that.searchSuggest();
    }
  },

  // 清空page对象data的history数组 重置缓存为[]
  clearHistory: function () {
    const that = this;
    wx.showModal({
      content: '确认清空全部历史记录',
      cancelColor: '#FF4500',
      confirmColor: '#FF4500',
      success(res) {
        if (res.confirm) {
          that.setData({
            history: []
          })
          wx.setStorageSync("history", []) //把空数组给history,即清空历史记录
        } else if (res.cancel) {
        }
      }
    })
  },

  // input失去焦点函数
  routeSearchResPage: function (e) {
    // console.log(e.detail.value)
    // 将数据存入本地
    if (this.data.searchKey) {
      let history = wx.getStorageSync("history") || [];
      history.push(this.data.searchKey)
      wx.setStorageSync("history", history);
    }
  },

  //每次显示变动就去获取缓存，给history，并for出来。
  onShow: function () {
    this.setData({
      history: wx.getStorageSync("history") || []
    })
  },

  // 搜索结果
  searchResult() {
    // console.log(this.data.searchKey)
    const self = this;
    //展示标题栏的loding
    wx.showNavigationBarLoading();

    //调用云函数
    wx.cloud.callFunction({
      name: 'searchResult',
      data:{ key: self.data.searchKey },
      success(res){
        // console.log(res);
        self.setData({
          showvideoresult: false,
          searchresult: res.result
        })
      },
      fail(err){
        // console.log(err);
        self.setData({
          showvideoresult: false
        })
      },
      complete(){
        //让 loding消失
        wx.hideNavigationBarLoading();
      }
    })
  },

  // 搜索完成点击确认
  searchover: function () {
    let that = this;
    that.setData({
      showsongresult: false
    })
    that.searchResult();
  },

  handlePlayAudio: function (event) { //event 对象，自带，点击事件后触发，event有type,target，timeStamp，currentTarget属性
    const videoId = event.currentTarget.dataset.id; //获取到event里面的歌曲id赋值给audioId
    wx.navigateTo({                                 //获取到id带着完整url后跳转到play页面
      url: `/pages/videoDetail/index?vid=${videoId}`
    })
  },

  // 点击热门搜索值或搜索历史，填入搜索框
  fill_value: function (e) {
    let that = this;
    // console.log(e.currentTarget.dataset.value)
    that.setData({
      searchKey: e.currentTarget.dataset.value,//点击吧=把值给searchKey,让他去搜索
      inputValue: e.currentTarget.dataset.value,//在输入框显示内容
      showView: false,//给false值，隐藏 热搜和历史 界面
      showsongresult: false, //给false值，隐藏搜索建议页面
    })
    that.searchResult(); //执行搜索功能
  }


})