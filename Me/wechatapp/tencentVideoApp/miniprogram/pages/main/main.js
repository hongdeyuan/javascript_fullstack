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
    curentIndex: 0,
    movieUrls: [
      {
        id: 1,
        img:'http://puui.qpic.cn/tv/0/314949802_1080607/0',
        title:'【哪吒之魔童降世】吒儿来了！我命由我不由天！'},
      {
        id: 2,
        img:'http://puui.qpic.cn/tv/0/333282049_1080607/0',
        title:'【明月照我心☝甜宠】不老实！王爷床边强吻明月'}
      ,{
        id: 3,
        img:'http://puui.qpic.cn/tv/0/333518185_1080607/0',
        title:'【机器人男友·新剧首播】毛晓彤追爱高冷姜潮'}
      ,{
        id: 4,
        img:'http://puui.qpic.cn/tv/0/334915190_1080607/0',
        title:'【满满喜欢你】左岸展越联手对抗沈晨阳'}
      ,{
        id: 5,
        img:'http://puui.qpic.cn/tv/0/329466791_1080607/0',
        title:'【演员】《情深深雨濛濛》重现依萍书桓 赵薇动容'
      }],
    videoUrls: [
      {
        img:'http://puui.qpic.cn/tv/0/335371184_1080607/0',
        title:'【谍海惊蛰·首播】《麻雀》团队聚首再战谍海'},
      {
        img:'http://puui.qpic.cn/tv/0/335071563_1080607/0',
        title:'【明月照我心☝甜宠】不老实！王爷床边强吻明月'}
      ,{
        img:'http://puui.qpic.cn/tv/0/333518185_1080607/0',
        title:'【机器人男友·新剧首播】毛晓彤追爱高冷姜潮'}
      ,{
        img:'http://puui.qpic.cn/tv/0/334915190_1080607/0',
        title:'【满满喜欢你】左岸展越联手对抗沈晨阳'}
      ,{
        img:'http://puui.qpic.cn/tv/0/336012656_1080607/0',
        title:'【秘密·更新】林星然求江夏留宿，小奶狗偷着乐'
      }],
    videoOnChasings:[
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
        remark: '张芷溪演绎多面特工'
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
    videoCanChasings:[
      {
        img: 'http://puui.qpic.cn/vcover_hz_pic/0/mzc00200mxyxu2t1566825599/0',
        title: '空降利刃',
        remark: '贾乃亮邢佳栋的热血特战人生'
      },{
        img: 'http://puui.qpic.cn/vcover_hz_pic/0/qft4f5xgll4cv6i1562658600/0',
        title: '陆军特战队',
        remark: '精锐部队的炼成'
      },{
        img: 'http://puui.qpic.cn/vcover_hz_pic/0/0ufmjpc8vso3bue1518071383/0',
        title: '五号特工组',
        remark: '中国式的007'
      },{
        img: 'http://puui.qpic.cn/vcover_hz_pic/0/v6nb9jnbp4rammw1480463082/0',
        title: '雪域雄鹰',
        remark: '首部高原特种兵大片'
      },{
        img: 'http://puui.qpic.cn/vcover_hz_pic/0/wlfsmo4mc5fc8k01556250690/0',
        title: '热血尖兵',
        remark: '90后鲜肉版“士兵突击”'
      },{
        img: 'http://puui.qpic.cn/vcover_hz_pic/0/mzc00200ejsxyf31570871085/0',
        title: '明月照我心',
        remark: '猪猪女孩狂撩傲娇王爷'
      },{
        img: 'http://puui.qpic.cn/vcover_hz_pic/0/r7uqpxtz1asi79w1484207876/0',
        title: '箭在弦上',
        remark: '靳东蒋欣情路纠结'
      },{
        img: 'http://puui.qpic.cn/vcover_hz_pic/0/uwr8gse5tajsfgj1556172896/0',
        title:'大秦帝国之纵横',
        remark: '浩浩荡荡大秦传奇'
      },{
        img: 'http://puui.qpic.cn/tv/0/334915413_498280/0',
        title:'满满喜欢你[会员先看]',
        remark: '顾小满课堂告白被截胡'
      }
    ],
    videoHeavys:[
      {
        img: 'http://puui.qpic.cn/tv/0/311404669_498280/0',
        title: '不负时光·会员全集',
        remark: '烟花拥吻！时光夫妇锁死'
      },{
        img: 'http://puui.qpic.cn/tv/0/337757046_498280/0',
        title: '幸福三重奏2·今晚播',
        remark: '张国立冲咖啡一语惹恼邓婕'
      },{
        img: 'http://puui.qpic.cn/tv/0/337052726_498280/0',
        title: '在远方·更新',
        remark: '姚远刘爱莲整顿新远方'
      },{
        img: 'http://puui.qpic.cn/tv/0/336989457_498280/0',
        title: '奶奶最懂得·艳遇丽江',
        remark: '惊艳味蕾的纳西族火锅'
      },{
        img: 'http://puui.qpic.cn/tv/0/327902981_498280/0',
        title: '中餐厅3·大厨翻白眼',
        remark: '黄晓明发飙惹怒杨紫王俊凯'
      },{
        img: 'http://puui.qpic.cn/tv/0/330470843_498280/0',
        title: '哪吒之魔童降世⚡超燃',
        remark: '国漫黑马值得再刷10遍！'
      }
    ],
    videoHotChasings:[
      {
        "item_title": "天籁之音·这现场也是没谁了",
        "item_remark": "本以为是普通明星，没想到却是中国顶级歌手，看傻韩国明星",
        "img_src": "https://puui.qpic.cn/vupload/0/common_pic_h.png/0"
      },
      {
        "item_title": "舞蹈风暴·策划",
        "item_remark": "热巴刘诗诗《起风了》绝美",
        "img_src": "https://puui.qpic.cn/vupload/0/common_pic_h.png/0"
      },
      {
        "item_title": "奇遇人生·策划",
        "item_remark": "Baby遇明言明语反应爆笑",
        "img_src": "https://puui.qpic.cn/vupload/0/common_pic_h.png/0"
      },
      {
        "item_title": "超新星2·体操抢先看",
        "item_remark": "周震南于小彤围观陈小纭",
        "img_src": "https://puui.qpic.cn/vupload/0/common_pic_h.png/0"
      },{
        "item_title": "我要打篮球·冠军胜出",
        "item_remark": "邓伦激动要戒指被爆笑回怼",
        "img_src": "https://puui.qpic.cn/vupload/0/common_pic_h.png/0"
      },
      {
        "item_title": "校花婚后体重变330斤",
        "item_remark": "涂磊直言：你家床多大？",
        "img_src": "https://puui.qpic.cn/vupload/0/common_pic_h.png/0"
      },
      {
        "item_title": "电影音乐会·神级现场",
        "item_remark": "张碧晨燃唱《哪吒》主题曲",
        "img_src": "https://puui.qpic.cn/vupload/0/common_pic_h.png/0"
      },
      {
        "item_title": "降龙觉醒",
        "item_remark": "骷髅大战蜘蛛精夺妖界C位",
        "img_src": "https://puui.qpic.cn/vupload/0/common_pic_h.png/0"
      }
    ]
    ,
    toView:'handpick',
    swiper_height: 80,
    scrollTop: 0,
    ch: 0
  },
  gotoDetail(event){
    const id = event.target.dataset.id;

    console.log('id :\t'+id);

    wx.navigateTo({
      url:'/pages/videoDetail/index'+"?id="+id
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

  /**
   * 生命周期函数--监听页面加载application/json  application/x-www-form-urlencode
   */
  onLoad: function (options) {

    wx.getSystemInfo({
      success: res => {
        //转为rpx
        let ch = (750 / res.screenWidth) * res.windowHeight - 80;
        this.setData({
          ch
        })
      },
    })

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
   * --监听页面滚动完成菜单固定
   */
  onPageScroll: function (e) {

    console.log(e.scrollTop)
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