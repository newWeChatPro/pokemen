// pages/pokemenList/pokemenList.js
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
    * 跳转精灵特性页面
    */
   onFeatureJump: function () {
      wx.navigateTo({
         url: '../feature/featureList/featureList',
         success:function() {
            console.log("kit go to featureList success");
         },
         fail:function() {
            console.log("kit go to featureList fail");
         },
         complete:function() {
            console.log("kit go to featureList complete");
         }
      });
   },

   /**
    * 跳转属性列表页
    */
    onTypeJump: function () {
       wx.navigateTo({
          url: '../type/typeList/typeList',
          success: function () {
             console.log("kit go to typeList success");
          },
          fail: function () {
             console.log("kit go to typeList fail");
          },
          complete: function () {
             console.log("kit go to typeList complete");
          }
       });
    },
   onAreaJump: function () {
      wx.navigateTo({
         url: '../area/areaList/areaList',
         success: function () {
            console.log("kit go to areaList success");
         },
         fail: function () {
            console.log("kit go to areaList fail");
         },
         complete: function () {
            console.log("kit go to areaList complete");
         }
      });
   }
})