//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    area:['石角','深圳','东莞','广州','中山'],
    gofrom:0,
    goto:0,
    date: '2016-09-01',
    gotime:['上午(6:00-10:00)','中午上午(11:00-14:00)','下午上午(14:00-:18:00)','晚上上午(18:00-:22:00)'],
    gotim:0,
    seat:['卧铺','大巴'],
    seatset:0

  },
  //出发地
 bindPickerFromChange: function(e) {
    this.setData({
      gofrom: e.detail.value
    })
  },
 //目的地
  bindPickerToChange: function(e) {
    this.setData({
      goto: e.detail.value
    })
  },
  //出发时间
   bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  //出发时间段
 bindPickertimeChange: function(e) {
    this.setData({
      gotim: e.detail.value
    })
  },

  //席别
 bindPickerSeatChange: function(e) {
    this.setData({
      seatset: e.detail.value
    })
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
 
})
