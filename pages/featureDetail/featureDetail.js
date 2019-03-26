
var dataFeature = require("../../data/features.js");
var allSpriteList = require("../../data/sprites/spriteList.js");

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
      var nowFeature = options.feature;
      this.setData({
         feature: options.feature,
         cname: dataFeature.table[nowFeature].cname,
         introduce: dataFeature.table[nowFeature].introduce,
         spriteList : allSpriteList
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

   },

   /**
    * 跳转到精灵详细页面
    */
   onSpriteDetailJump: function (event) {
      var sprite = event.currentTarget.dataset.idx;
      wx.navigateTo({
         url: '../spriteDetail/spriteDetail?sprite=' + sprite,
         success: function () {
            console.log("featureDetail go to spriteDetail success");
         },
         fail: function () {
            console.log("featureDetail go to spriteDetail fail");
         },
         complete: function () {
            console.log("featureDetail go to spriteDetail complete");
         }
      });
   }
})