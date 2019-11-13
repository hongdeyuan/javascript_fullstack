Page({
  data: {
    projectAddress: 'https://github.com/hongdeyuan/javascript_fullstack/tree/master/Me/wechatapp/tencentVideoApp',
    github: 'https://github.com/hongdeyuan/javascript_fullstack/tree/master/Me/wechatapp/tencentVideoApp',
    email: '1737407069@qq.com',
    qq: '1737407069',
  },
  copy(e) {
    let dataset = (e.currentTarget || {}).dataset || {}
    let title = dataset.title || ''
    let content = dataset.content || ''
    wx.setClipboardData({
      data: content,
      success() {
        wx.showToast({
          title: `已复制${title}`,
          duration: 2000,
        })
      },
    })
  },
})