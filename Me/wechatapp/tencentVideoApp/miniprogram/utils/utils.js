
let navigatItem = (e) => {
  const url = e.currentTarget.dataset.url || '/pages/main/main'
  const open = e.currentTarget.dataset.open
  const toUrl = () => {
    wx.navigateTo({
      url,
    })
  }
  if (open) {
    toUrl()
  } else {
    if (ifLogined()) {
      toUrl()
    } else {
      wx.navigateTo({
        url: '/pages/mine/mine'
      })
    }
  }
}



module.exports = {
  navigatItem
}