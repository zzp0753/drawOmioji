//index.js
//获取应用实例
var app = getApp()

var defaultAddr = 'image/'



var SSRs = ['大天狗', '酒吞童子', '荒川之主', '阎魔', '小鹿男', '茨木童子', '青行灯', '妖刀姬', '一目连', '花鸟卷', '辉夜姬', '荒', '彼岸花', '雪童子', '山风', '玉藻前','御馔津']
var SRs = ['桃花妖', '雪女', '鬼使白', '鬼使黑', '孟婆', '犬神', '骨女', '鬼女红叶', '跳跳哥哥', '傀儡师', '海坊主', '判官', '凤凰火', '吸血姬', '妖狐', '妖琴师', '食梦貘', '清姬', '镰鼬', '姑获鸟', '二口女', '白狼', '樱花妖', '惠比寿', '络新妇', '般若', '青坊主', '万年竹', '夜叉', '黑童子', '白童子', '烟烟罗', '金鱼姬', '鸩', '以津真天', '匣中少女', '小松丸', '书翁','百目鬼','追月神','日和坊','薰','弈']
var Rs = ['三尾狐', '座敷童子', '鲤鱼精', '九命猫', '狸猫', '河童', '童男', '童女', '饿鬼', '巫蛊师', '鸦天狗', '食发鬼', '武士之灵', '雨女', '跳跳弟弟', '跳跳妹妹', '兵俑', '丑时之女', '独眼小僧', '铁鼠', '椒图', '管狐', '山兔', '萤草', '蝴蝶精', '山童', '首无', '觉', '青蛙瓷器', '古笼火', '兔丸','数珠','小袖之手','虫师']

var SSRsPicLinks = [defaultAddr + '217.png', defaultAddr + '219.png', defaultAddr + '248.png', defaultAddr + '255.png', defaultAddr + '259.png', defaultAddr + '265.png', defaultAddr + '266.png', defaultAddr + '269.png', defaultAddr + '272.png', defaultAddr + '279.png', defaultAddr + '280.png', defaultAddr + '283.png', defaultAddr + '288.png', defaultAddr + '292.png', defaultAddr + '296.png', defaultAddr + '300.png', defaultAddr + '304.png']

var SRsPicLinks = [defaultAddr + '200.png', defaultAddr + '201.png', defaultAddr + '210.png', defaultAddr + '211.png', defaultAddr + '215.png', defaultAddr + '220.png', defaultAddr + '223.png', defaultAddr + '231.png', defaultAddr + '233.png', defaultAddr + '242.png', defaultAddr + '247.png', defaultAddr + '251.png', defaultAddr + '252.png', defaultAddr + '253.png', defaultAddr + '254.png', defaultAddr + '256.png', defaultAddr + '257.png', defaultAddr + '260.png', defaultAddr + '261.png', defaultAddr + '262.png', defaultAddr + '263.png', defaultAddr + '264.png', defaultAddr + '267.png', defaultAddr + '268.png', defaultAddr + '270.png', defaultAddr + '271.png', defaultAddr + '273.png', defaultAddr + '275.png', defaultAddr + '276.png', defaultAddr + '277.png', defaultAddr + '278.png', defaultAddr + '281.png', defaultAddr + '282.png', defaultAddr + '285.png', defaultAddr + '286.png', defaultAddr + '287.png', defaultAddr + '290.png', defaultAddr + '291.png', defaultAddr + '293.png', defaultAddr + '295.png', defaultAddr + '297.png', defaultAddr + '298.png', defaultAddr + '303.png']

var RsPicLinks = [defaultAddr + '202.png', defaultAddr + '205.png', defaultAddr + '206.png', defaultAddr + '207.png', defaultAddr + '208.png', defaultAddr + '209.png', defaultAddr + '212.png', defaultAddr + '213.png', defaultAddr + '214.png', defaultAddr + '216.png', defaultAddr + '218.png', defaultAddr + '221.png', defaultAddr + '222.png', defaultAddr + '224.png', defaultAddr + '225.png', defaultAddr + '226.png', defaultAddr + '227.png', defaultAddr + '228.png', defaultAddr + '230.png', defaultAddr + '232.png', defaultAddr + '234.png', defaultAddr + '236.png', defaultAddr + '237.png', defaultAddr + '238.png', defaultAddr + '241.png', defaultAddr + '243.png', defaultAddr + '244.png', defaultAddr + '249.png', defaultAddr + '250.png', defaultAddr + '274.png', defaultAddr + '289.png', defaultAddr + '301.png', defaultAddr + '302.png', defaultAddr + '306.png']



var niceHistory = [];
var badRs = []
var mySSRs = []
var sumTimes = 0
var last_p = 0

// console.log(SSRs)
// console.log(SRs)
// console.log(Rs)

function getRandomArrEle(arr){
  return arr[Math.floor(arr.length * Math.random())]
}

function myFind(e,arr){
    var indexInArr = -1;
    for(var i=0;i<arr.length;i++){
        if(e == arr[i]){
            indexInArr = i;
            break;
        }
    }
    return indexInArr
}



Page({
  data: {
    motto: 'Hello World??????',
    userInfo: {}
  },
  touchStart: function (e) {
      //得到触摸点的坐标
      this.startX = e.changedTouches[0].x
      this.startY = e.changedTouches[0].y
      this.context = wx.createContext()

      if (this.isClear) { //判断是否启用的橡皮擦功能  ture表示清除  false表示画画
          this.context.setStrokeStyle('#F8F8F8') //设置线条样式 此处设置为画布的背景颜色  橡皮擦原理就是：利用擦过的地方被填充为画布的背景颜色一致 从而达到橡皮擦的效果
          this.context.setLineCap('round') //设置线条端点的样式
          this.context.setLineJoin('round') //设置两线相交处的样式
          this.context.setLineWidth(7) //设置线条宽度
          this.context.save();  //保存当前坐标轴的缩放、旋转、平移信息
          this.context.beginPath() //开始一个路径
          this.context.arc(this.startX, this.startY, 5, 0, 2 * Math.PI, true);  //添加一个弧形路径到当前路径，顺时针绘制  这里总共画了360度  也就是一个圆形
          this.context.fill();  //对当前路径进行填充
          this.context.restore();  //恢复之前保存过的坐标轴的缩放、旋转、平移信息
      } else {
          this.context.setStrokeStyle('#fdfed3')
          this.context.setLineWidth(7)
          this.context.setLineCap('round') // 让线条圆润
          this.context.beginPath()

      }
  },
  //手指触摸后移动
  touchMove: function (e) {

      var startX1 = e.changedTouches[0].x
      var startY1 = e.changedTouches[0].y

      if (this.isClear) { //判断是否启用的橡皮擦功能  ture表示清除  false表示画画

          this.context.save();  //保存当前坐标轴的缩放、旋转、平移信息
          this.context.moveTo(this.startX, this.startY);  //把路径移动到画布中的指定点，但不创建线条
          this.context.lineTo(startX1, startY1);  //添加一个新点，然后在画布中创建从该点到最后指定点的线条
          this.context.stroke();  //对当前路径进行描边
          this.context.restore()  //恢复之前保存过的坐标轴的缩放、旋转、平移信息

          this.startX = startX1;
          this.startY = startY1;

      } else {
          this.context.moveTo(this.startX, this.startY)
          this.context.lineTo(startX1, startY1)
          this.context.stroke()

          this.startX = startX1;
          this.startY = startY1;

      }
      //只是一个记录方法调用的容器，用于生成记录绘制行为的actions数组。context跟<canvas/>不存在对应关系，一个context生成画布的绘制动作数组可以应用于多个<canvas/>
      wx.drawCanvas({
          canvasId: 'myCanvas',
          reserve: true,
          actions: this.context.getActions() // 获取绘图动作数组
      })
  },
  touchEnd: function(e){
      wx.drawCanvas({
          canvasId: 'myCanvas',
          reserve: false,
          actions: this.context.getActions() // 获取绘图动作数组
      })
      var myRandom = parseInt(100 * Math.random());
      var myRes;
      var myResLink;
      sumTimes = sumTimes + 1;
      console.log(sumTimes);
      if (myRandom == 6 || myRandom == 58 || myRandom == 66) {
          myRes = getRandomArrEle(SSRs)
          myResLink = SSRsPicLinks[myFind(myRes, SSRs)];
        //   myRes = 'SSR:' + myRes
          niceHistory.push(myRes)
          wx.vibrateShort();
          wx.showToast({
              title: '' + myRes + '??...',
              image: myResLink,
              duration: 3200,
              mask: true
          })

      }
      else if (myRandom > 6 && myRandom < 35) {
          myRes = getRandomArrEle(SRs)
          myResLink = SRsPicLinks[myFind(myRes, SRs)];
          wx.showToast({
              title: '抽到 ' + myRes,
              image: myResLink,
              duration: 1000,
              mask: true
          })
          myRes = 'SR:' + myRes
          
          niceHistory.push(myRes)
      }
      else {
          myRes = getRandomArrEle(Rs)

          myResLink = RsPicLinks[myFind(myRes, Rs)];
          console.log(myFind(myRes, Rs))
          badRs.push(myRes)
          myRes = 'R:' + myRes
      }
      this.setData({
          drawResult: myRes,
          drawResLink: myResLink
      })
      
      
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  drawHistory: function(){
      for (var i = last_p; i < niceHistory.length; i++) {
          console.log(niceHistory[i][1])
          if (niceHistory[i][1] == 'S') {
              mySSRs.push(niceHistory[i]);
          }
      }
      last_p = niceHistory.length;
      wx.navigateTo({
          url: 'history'
      })
  },
  
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

   
  },
  onReady: function (e) {
      
  },

  
  onShareAppMessage: function () {
      wx.showShareMenu({
          withShareTicket: true
      })
  }
})

module.exports = [niceHistory, mySSRs, badRs]



