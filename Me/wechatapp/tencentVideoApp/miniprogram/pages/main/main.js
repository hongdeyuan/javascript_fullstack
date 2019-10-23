// miniprogram/pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moviesCategory:[
      { name: '精选', id: 'handpick' },
      { name: '电视剧', id: 'teleplay' },
      { name: '综艺', id: 'variety' },
      { name: '电影', id: 'movie' },
      { name: '动漫', id: 'cartoon' },
      { name: '少儿', id: 'children' },
      { name: '游戏', id: 'game' },
      { name: '旅游', id: 'travel' },
      { name: '记录片', id: 'documentary' }
    ],
    curentIndex:0,
    movieUrls: [
      {
        img:'http://puui.qpic.cn/tv/0/314949802_1080607/0',
        title:'【哪吒之魔童降世】吒儿来了！我命由我不由天！'},
      {
        img:'http://puui.qpic.cn/tv/0/333282049_1080607/0',
        title:'【明月照我心☝甜宠】不老实！王爷床边强吻明月'}
      ,{
        img:'http://puui.qpic.cn/tv/0/333518185_1080607/0',
        title:'【机器人男友·新剧首播】毛晓彤追爱高冷姜潮'}
      ,{
        img:'http://puui.qpic.cn/tv/0/334351892_1080607/0',
        title:'【没有秘密的你】是心动啊！小奶狼江夏扑倒林星然'}
      ,{
        img:'http://puui.qpic.cn/tv/0/329466791_1080607/0',
        title:'【演员】《情深深雨濛濛》重现依萍书桓 赵薇动容'
      }],
    videoChasings:[
      {
        img: 'http://puui.qpic.cn/vcover_hz_pic/0/uiq0rxuywu508qr1480438739/0',
        title: '功夫',
        remark: '帅气！星爷大战斧头帮'
      },{
        img: 'http://puui.qpic.cn/vcover_hz_pic/0/gwz8nqvc78oexgm1567394572/0',
        title: '九品芝麻官',
        remark: '周星驰大展骂功斗恶霸'
      },{
        img: 'http://puui.qpic.cn/vcover_hz_pic/0/w0d9o4gnr8y0ghl1551668084/0',
        title: '冷案',
        remark: '四警花揭陈年冷案真相'
      },{
        img: 'http://puui.qpic.cn/vcover_hz_pic/0/qg7yxcwkcm66zqh1557041563/0',
        title: '暗战风云',
        remark: '何琳王茜华谍战'
      },{
        img: 'http://puui.qpic.cn/vcover_hz_pic/0/ik7102yoxdc3ck31548841362/0',
        title: '雪地娘子军',
        remark: '抗日版“杨门女将”'
      },{
        img: 'http://puui.qpic.cn/vcover_hz_pic/0/7qreid0d34vsmv21501617987/0',
        title: '黑土热血',
        remark: '：张芷溪演绎多面特工'
      },{
        img: 'http://puui.qpic.cn/vcover_hz_pic/0/5y95zy4idzqf6hc1555571752/0',
        title: '捉妖记2',
        remark: '小怪物胡巴重出江湖'
      },{
        img: 'http://puui.qpic.cn/vcover_hz_pic/0/vbb35hm6m6da1wc1561952369/0',
        title:'陈情令',
        remark: '肖战王一博共闯侠义江湖'
      },{
        img: 'http://puui.qpic.cn/vcover_hz_pic/0/tg12lsdj2lzgptvt1444754487.jpg/0',
        title:'X战警：逆转未来',
        remark: '金刚狼穿越修复基友情'
      }
    ],
    toView:'handpick'
  },
  switchTab(e){
    this.setData({
      curentIndex:e.currentTarget.dataset.index,
      toView: e.currentTarget.dataset.id
    })
  },

  /**
   * 生命周期函数--监听页面加载application/json  application/x-www-form-urlencode
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://m.v.qq.com/play.html?cid=zr5a67l333ehzu9&vid=d0032x85stp',
      data: {},
      header: {'content-type':'application/json'},
      success: (res) => {
        // success
        console.log(res);
      },
      fail: () => {},
      complete: () => {}
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

  }
})