
var dataFeature = require("../../../data/features.js");

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
      this.setData({
         featureTable: dataFeature.table
      })
   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function () {
      wx.setNavigationBarTitle({
         title: "特性"
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
    * 跳转特性详情页
    */
   onFeatureDetailJump: function (event) {
      var feature = event.currentTarget.dataset.idx;
      wx.navigateTo({
         url: '../featureDetail/featureDetail?feature=' + feature,
         success: function () {
            console.log("featureList go to featureDetail success");
         },
         fail: function () {
            console.log("featureList go to featureDetail fail");
         },
         complete: function () {
            console.log("featureList go to featureDetail complete");
         }
      });
   }

})