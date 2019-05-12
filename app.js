//app.js

App({
   onLaunch: function () {
      // 展示本地存储能力
      var logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)
      var storageData = wx.getStorageSync('spriteList');
      if (!storageData) {
         var dataObj = require('data/sprites/spriteList.js')
         wx.clearStorageSync();
         wx.setStorageSync('spriteList', dataObj);
      }
   },
   globalData: {
      userInfo: null
   }
})