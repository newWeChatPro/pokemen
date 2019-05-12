
var type = require("../../../data/type.js");

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
         typeItems : type.items
      })
   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function () {
      wx.setNavigationBarTitle({
         title: "属性相克"
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
    * 跳转属性相克详情页
    */
   onTypeJump: function (event) {
      var typeIndex = event.currentTarget.dataset.idx;
      wx.navigateTo({
         url: '../typeDetail/typeDetail?typeIndex=' + typeIndex,
         success: function () {
            console.log("typeList go to typeDetail success");
         },
         fail: function () {
            console.log("typeList go to typeDetail fail");
         },
         complete: function () {
            console.log("typeList go to typeDetail complete");
         }
      });
   }
})