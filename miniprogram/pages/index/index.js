var app = getApp();

Page({
  data: {
     userInfo: {},
     hasUserInfo: false,
     canIUse: wx.canIUse('button.open-type.getUserInfo'),
      shareImgs:[
        "../../images/zp/zp1.jpg",
        "../../images/zp/zp2.jpg",
        "../../images/zp/zp3.jpg",
        "../../images/zp/zp4.jpg",
        "../../images/zp/zp5.jpg",
        "../../images/zp/zp6.jpg",
        "../../images/zp/zp7.jpg"
      ]
  },
  onLoad: function () {

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {

      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
 * 用户点击右上角分享
 */
  onShareAppMessage: function () {

    var imgIndex = Math.floor(Math.random() * 7);
    var imageUrl = this.data.shareImgs[imgIndex];

    return {
      title: "敢不敢测测你的颜值得多少分？",
      path: '/pages/index/index',
      imageUrl: imageUrl,
      success: function (res) {
        // 转发成功
        console.log("转发成功")
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败")
      }
    }
  }
});