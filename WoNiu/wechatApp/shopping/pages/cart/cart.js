// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],
    hasList: false,
    selectAllStatus:true,
    totalPrice: ''
  },
  selectList(e){
    let index = e.currentTarget.dataset.index;
    let selected = `carts[${index}].selected`;
    this.setData({
      [selected]:!this.data.carts[index].selected
    });
    this.getTotalPrice();
    let carts = this.data.carts;
    for(let i = 0; i < carts.length;i++){
      if (!carts[i].selected) {
        this.setData({
          selectAllStatus:false
        })
        return
      }else{
        this.setData({
          selectAllStatus:true
        })
      }
    }

  },
  selectAll(){
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;
    for(let i = 0; i < carts.length;i++){
      carts[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
  },
  minusCount(e){
    let index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num--;
    if (num < 0) {
      num = 0;
    }
    carts[index].num = num;
    this.setData({
      carts:carts
    })
    this.getTotalPrice();
  },
  addCount(e){
    let index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num++;
    carts[index].num = num;
    this.setData({
      carts:carts
    })

    this.getTotalPrice();
  },
  deleteList(e){
    let index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index,1);
      this.setData({
        carts:carts
      })
    if (!carts.length) {
     this.setData({
       hasList:false
     })
    }else{
      this.getTotalPrice();
    }
   
  },
  getTotalPrice() {
    let carts = this.data.carts;
    let total = 0;
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].selected) {
        total += carts[i].num*carts[i].price;
      }
    }
    //toFixed(2) 保留两位小数
    this.setData({
      totalPrice : total.toFixed(2)
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
    setTimeout(() => {
      this.setData({
        hasList:true,
        carts:[
          { id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 0.01, selected: true },
          { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 0.03, selected: true }
        ]
      });
      this.getTotalPrice();
    },1000);

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