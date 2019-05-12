


Page({

  /**
   * 页面的初始数据
   */
  data: {
    spriteList: [],
    showSpriteList:[],
    nowShowIndex: 15,
    callBackCount: 15
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var spriteList = wx.getStorageSync("spriteList");
    if(!spriteList){
      spriteList = require('../../../data/sprites/spriteList.js');
      wx.setStorageSync('spriteList', spriteList);
    }
    this.setData({
      showSpriteList: spriteList.slice(0,15)
    });
    
  },
  //跳转到详情页面
  onTapSpriteDetail(event){
    var spriteId = event.currentTarget.dataset.spriteId;
    wx.navigateTo({
      url: '../spriteDetail/spriteDetail?id=' + spriteId,
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
    wx.showNavigationBarLoading();
    var index = this.data.showSpriteList.length;
    var spriteList = wx.getStorageSync("spriteList");
    var sprites = [];
    sprites = spriteList.slice(index, index + 15);
    sprites = this.data.showSpriteList.concat(sprites);
    this.setData({
      showSpriteList: sprites
    })
    console.log(index);
    wx.stopPullDownRefresh();
    wx.hideNavigationBarLoading();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})