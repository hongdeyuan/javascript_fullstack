// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category:[
      { name: '果味', id: 'guowei' },
      { name: '蔬菜', id: 'shucai' },
      { name: '炒货', id: 'chaohuo' },
      { name: '点心', id: 'dianxin' },
      { name: '粗茶', id: 'cucha' },
      { name: '淡饭', id: 'danfan' }
    ],
    curentIndex:0,
    toView:'guowei',
    detail: [
      {
        banner: 'http://hbimg.b0.upaiyun.com/ad28f5eff18e75e2765043bcb53d2e4be004958027a33-MvE8WW_fw658',
        cate: '果味',
        id: 'guowei',
        detail: [
          {
            thumb: '../../image/c3.png',
            name: '坚果'
          },
          {
            thumb: '../../image/c1.png',
            name: '瓜子'
          },
          {
            thumb: '../../image/c2.png',
            name: '大米'
          },
          {
            thumb: '../../image/c4.png',
            name: '芹菜'
          }
        ]
      },
      {
        banner: 'http://hbimg.b0.upaiyun.com/ad28f5eff18e75e2765043bcb53d2e4be004958027a33-MvE8WW_fw658',
        cate: '蔬菜',
        id: 'shucai',
        detail: [
          {
            thumb: '../../image/c3.png',
            name: '坚果'
          },
          {
            thumb: '../../image/c1.png',
            name: '瓜子'
          },
          {
            thumb: '../../image/c2.png',
            name: '大米'
          },
          {
            thumb: '../../image/c4.png',
            name: '芹菜'
          }
        ]
      },
      {
        banner: 'http://hbimg.b0.upaiyun.com/ad28f5eff18e75e2765043bcb53d2e4be004958027a33-MvE8WW_fw658',
        cate: '炒货',
        id: 'chaohuo',
        detail: [
          {
            thumb: '../../image/c3.png',
            name: '坚果'
          },
          {
            thumb: '../../image/c1.png',
            name: '瓜子'
          },
          {
            thumb: '../../image/c2.png',
            name: '大米'
          },
          {
            thumb: '../../image/c4.png',
            name: '芹菜'
          }
        ]
      },
      {
        banner: 'http://hbimg.b0.upaiyun.com/ad28f5eff18e75e2765043bcb53d2e4be004958027a33-MvE8WW_fw658',
        cate: '点心',
        id: 'dianxin',
        detail: [
          {
            thumb: '../../image/c3.png',
            name: '坚果'
          },
          {
            thumb: '../../image/c1.png',
            name: '瓜子'
          },
          {
            thumb: '../../image/c2.png',
            name: '大米'
          },
          {
            thumb: '../../image/c4.png',
            name: '芹菜'
          }
        ]
      },
      {
        banner: 'http://hbimg.b0.upaiyun.com/ad28f5eff18e75e2765043bcb53d2e4be004958027a33-MvE8WW_fw658',
        cate: '粗茶',
        id: 'cucha',
        detail: [
          {
            thumb: '../../image/c3.png',
            name: '坚果'
          },
          {
            thumb: '../../image/c1.png',
            name: '瓜子'
          },
          {
            thumb: '../../image/c2.png',
            name: '大米'
          },
          {
            thumb: '../../image/c4.png',
            name: '芹菜'
          }
        ]
      },
      {
        banner: 'http://hbimg.b0.upaiyun.com/ad28f5eff18e75e2765043bcb53d2e4be004958027a33-MvE8WW_fw658',
        cate: '淡饭',
        id: 'danfan',
        detail: [
          {
            thumb: '../../image/c3.png',
            name: '坚果'
          },
          {
            thumb: '../../image/c1.png',
            name: '瓜子'
          },
          {
            thumb: '../../image/c2.png',
            name: '大米'
          },
          {
            thumb: '../../image/c4.png',
            name: '芹菜'
          }
        ]
      }
    ]
  },
  switchTab(e){
    this.setData({
      curentIndex:e.currentTarget.dataset.index,
      toView: e.currentTarget.dataset.id
    })
  },
  //求每一栏高度
  length: function(e) {
    var that = this;
    var detail = that.data.detail;
    for (var i = 0; i < detail.length; i++) {
      if(detail[i]['id']==e){
        return detail[i]['detail'].length;
 
      }
    }
  },
  //滚动触发
  scroll: function(e) {
    var scrollTop = e.detail.scrollTop,
      height = 0;
    var that = this;
    let count = 0;

    for (let i = 0; i < that.data.category.length; i++) {
      var _height =26 + that.length(that.data.category[i]['id'])*102;
      if (scrollTop >= height){//scrollTop >= height
        count = i;
      }
      height +=_height;
      console.log(height)
    }

    that.setData({
      curentIndex: count,
    })
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