// pages/index/history.js

var niceHistory = require('index.js')[0]
var mySSRs = require('index.js')[1]
var badRs = require('index.js')[2]


Page({

  /**
   * 页面的初始数据
   */
  data: {
    niceCards: niceHistory,
    mySSRs: mySSRs,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //   console.log(niceHistory);
      
    //   for (var i = last_p; i < niceHistory.length; i++) {
    //       console.log(niceHistory[i][1])
    //       if (niceHistory[i][1] == 'S') {
    //           mySSRs.push(niceHistory[i]);
    //       }
    //   }
    //   last_p = niceHistory.length;

      console.log(require('index.js'));
      this.setData({
          SSRTimes: mySSRs.length,
          SRTimes: niceHistory.length,
          badRs: badRs.length,
          sumTimes: badRs.length + niceHistory.length
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
  
  }
})