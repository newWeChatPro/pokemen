
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

      this.typeIndex = options.typeIndex;
      this.typeItem = type.items;
      this.setData({
         typeIndex : options.typeIndex,
         type: type,
         typeItem: type.items,
         attackType: type.table[this.typeIndex]
      })
   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function () {
      wx.setNavigationBarTitle({
         title: this.typeItem[this.typeIndex]
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

   getCname: function (key) {
      switch (key) {
         case 'normal':
            return '一般';
         case 'fighting':
            return '斗';
         case 'flying':
            return '飞';
         case 'poison':
            return '毒';
         case 'ground':
            return '地';
         case 'rock':
            return '岩';
         case 'bug':
            return '虫';
         case 'ghost':
            return '幽灵';
         case 'steel':
            return '钢';
         case 'fire':
            return '火';
         case 'water':
            return '水';
         case 'grass':
            return '草';
         case 'electric':
            return '电';
         case 'psychic':
            return '超';
         case 'ice':
            return '冰';
         case 'dragon':
            return '龙';
         case 'dark':
            return '恶';
         case 'fairy':
            return '妖精';
         default:
            return '未';
      }
   }
})