//处理数据的js
import type from '../../../data/type.js';
import area from '../../../data/area.js';
import features from '../../../data/features.js';
import egggroup from '../../../data/egggroup.js';
import gendercode from '../../../data/gendercode.js';
var app = getApp();
Page({
   /**
    * 页面的初始数据
    */
   data: {
      sprite: null
   },

   /**
    * 生命周期函数--监听页面加载
    */
   getSpriteItemById: function (spriteId) {
      var spriteList = wx.getStorageSync("spriteList");
      var len = spriteList.length;
      for (var i = 0; i < len; i++) {
         if (spriteList[i].id == spriteId) {
            return spriteList[i];
         }
      }
   },
   onLoad: function (options) {
      var spriteId = options.id;
      var spriteData = this.getSpriteItemById(spriteId);
      wx.setNavigationBarTitle({
         title: spriteData.cname
      });
      //处理获得的sprite数据
      this.formate(spriteData);
      this.setData({
         id: spriteId,
         sprite: spriteData
      })
   },

   //处理spriteData方法
   formate: function (item) {
   
      item.showname = item.cname + (item.form || '');
      item.showid = item.id.replace(/\D/, '');
      item.ctype = [];
      item.featuresList = [];
      item.carea = [];
      item.ceggGroup = [];
      item.cevolutions = [];
      // 类型
      for (let i = 0, l = item.type.length; i < l; i++) {
         item.ctype.push(type.getCname(item.type[i]));
      }
      // 地区
      for (let i = 0, l = item.area.length; i < l; i++) {
         item.carea.push(area.getCname(item.area[i]));
      }
      // 蛋组
      for (let i = 0, l = item.eggGroup.length; i < l; i++) {
         item.ceggGroup.push(egggroup.getCname(item.eggGroup[i]));
      }
      // 性别比
      item.genderObj = gendercode.getText(item.gendercode);
      var addStatsTxt = '';
      var addStats = item.addStats;
      if (addStats.HP > 0) {
         addStatsTxt += 'HP+' + addStats.HP + ' ';
      }
      if (addStats.ATK > 0) {
         addStatsTxt += '攻击+' + addStats.ATK + ' ';
      }
      if (addStats.DEF > 0) {
         addStatsTxt += '防御+' + addStats.DEF + ' ';
      }
      if (addStats.SPA > 0) {
         addStatsTxt += '特攻+' + addStats.SPA + ' ';
      }
      if (addStats.SPD > 0) {
         addStatsTxt += '特防+' + addStats.SPD + ' ';
      }
      if (addStats.SPE > 0) {
         addStatsTxt += '速度+' + addStats.SPE + ' ';
      }
      item.addStatsTxt = addStatsTxt;
      // 特性
      var featuressize = item.feature.length;
      for (let i = 0, l = featuressize; i < l; i++) {
         var abobj = features.getFeature(item.feature[i]);
         if (featuressize > 1 && i == featuressize - 1) {
            abobj.showname = abobj.cname + '（隐藏特性）';
         } else {
            abobj.showname = abobj.cname;
         }
         item.featuresList.push(abobj);
      }
      this.getEvolutions(item, item.evolutions);
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
   getEvolutions: function (item, evolutions) {
      var step1 = evolutions[0],
         step2 = evolutions[1],
         step3 = evolutions[2],
         step1List = [],
         step2List = [],
         step3List = [];
      if (step3) {
         for (var i = 0; i <= 7; i++) {
            var idkey = 'id' + (i ? i : '');
            var idvalue = step3[idkey];
            var levelkey = 'level' + (i ? i : '');
            var stonekey = 'stone' + (i ? i : '');
            var happinesskey = 'happiness' + (i ? i : '');
            var exchangekey = 'exchange' + (i ? i : '');
            var otherkey = 'other' + (i ? i : '');
            var sprite = idvalue ? this.getSpriteItemById(idvalue) : {};
            var e = {
               id: step3[idkey],
               level: step3[levelkey],
               stone: step3[stonekey],
               happiness: step3[happinesskey],
               exchange: step3[exchangekey],
               other: step3[otherkey],
               index: sprite.index,
               name: sprite.name,
               cname: sprite.cname,
               className: idvalue ? (idvalue == item.id ? 'current' : '') : 'empty',
               stand: idvalue ? '' : 'stand'
            }
            step3List.push(e);
         }
      }
      if (step2) {
         for (var i = 0; i <= 7; i++) {
            var idkey = 'id' + (i ? i : '');
            var idvalue = step2[idkey]
            var levelkey = 'level' + (i ? i : '');
            var stonekey = 'stone' + (i ? i : '');
            var happinesskey = 'happiness' + (i ? i : '');
            var exchangekey = 'exchange' + (i ? i : '');
            var otherkey = 'other' + (i ? i : '');
            var sprite = idvalue ? this.getSpriteItemById(idvalue) : {};
            var e = {
               id: step2[idkey],
               level: step2[levelkey],
               stone: step2[stonekey],
               happiness: step2[happinesskey],
               exchange: step2[exchangekey],
               other: step2[otherkey],
               index: sprite.index,
               name: sprite.name,
               cname: sprite.cname,
               className: idvalue ? (idvalue == item.id ? 'current' : '') : 'empty',
               stand: idvalue ? '' : 'stand'
            }
            step2List.push(e);
         }
      }
      if (step1) {
         for (var i = 0; i <= 7; i++) {
            var idkey = 'id' + (i ? i : '');
            var idvalue = step1[idkey]
            var levelkey = 'level' + (i ? i : '');
            var stonekey = 'stone' + (i ? i : '');
            var happinesskey = 'happiness' + (i ? i : '');
            var exchangekey = 'exchange' + (i ? i : '');
            var otherkey = 'other' + (i ? i : '');
            var sprite = idvalue ? this.getSpriteItemById(idvalue) : {};
            var e = {
               id: step1[idkey],
               level: step1[levelkey],
               stone: step1[stonekey],
               happiness: step1[happinesskey],
               exchange: step1[exchangekey],
               other: step1[otherkey],
               index: sprite.index,
               name: sprite.name,
               cname: sprite.cname,
               className: idvalue ? (idvalue == item.id ? 'current' : '') : 'empty'
            }
            step1List.push(e);
         }
      }
      item.evolutmax = [];
      for (var i = 0; i <= 7; i++) {
         var s1 = step1List[i] || { id: undefined, className: 'empty' };
         var s2 = step2List[i] || { id: undefined, className: 'empty', stand: 'stand' };
         var s3 = step3List[i] || { id: undefined, className: 'empty', stand: 'stand' };
         if (s1.id || s2.id || s3.id) {
            var list = [];
            list.push(s1);
            list.push(s2);
            list.push(s3);
            item.evolutmax.push(list);
         }
      }
      // console.log(item);
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