//index.js

Page({
  data: {
    // 写死
    // easy mock
    // json server
    navData: [],
    currentTab: 0,
    navScrollLeft: 300,
    windowWidth: 0,
    isLoading: true,
    address:  '范家新村',
    destination: '八一广场'
  },
  onLoad() {
    var w = wx.getSystemInfoSync().windowWidth;
    this.setData({
      windowWidth: w
    })
    console.log(w)
    this.requestCarts()
  },
  requestCarts() {
    let self = this
    wx.request({
      url: 'http://localhost:3000/indexPage',
      success: (res) => {
        // console.log(this)
        // console.log(res.data)
        // console.log(res);
        const navData = res.data.navData;
        const imgUrls = res.data.imgUrls;
        // const cost = res.data.data.cost
        // console.log(navData)
        self.setData({
          navData,
          imgUrls,
          // cost
        })
      }
    })
  },
  switchNav (event) {
      
    const cart = event.currentTarget.dataset.name;
    const cur = event.currentTarget.dataset.current;
    let text = this.data.navData;
    let windowWidth = this.data.windowWidth / 6
    console.log(this.data.windowWidth / 6, cur)
    this.setData({
      cart,
      currentTab: cur,
      navScrollLeft: (cur - 1) * windowWidth
    })
  }
})
