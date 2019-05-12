
var area = require("../../../data/area.js");
var spriteList = require("../../../data/sprites/spriteList.js");

Page({

   /**
    * 页面的初始数据
    */
   data: {

   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      this.nowArea = options.area;
      this.setData({
         nowArea : this.nowArea,
         area: area.area,
         spriteList: spriteList
      })
   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function () {
      wx.setNavigationBarTitle({
         title: area.area[this.nowArea]
      })
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

   },

   /**
    * 跳转到精灵详细页面
    */
   onSpriteDetailJump: function (event) {
      var spriteId = event.currentTarget.dataset.item.id;
      wx.navigateTo({
         url: '../../sprite/spriteDetail/spriteDetail?id=' + spriteId,
         success: function () {
            console.log("areaSpriteList go to spriteDetail success");
         },
         fail: function () {
            console.log("areaSpriteList go to spriteDetail fail");
         },
         complete: function () {
            console.log("areaSpriteList go to spriteDetail complete");
         }
      });
   }

})