//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    //加载状态
    loading: false,
    //当前温度
    currentTemperature: '',
    //夜间温度
    nightAirTemperature: '',
    //白天温度
    dayAirTemperature: '',
    //当前天气
    weather: '',
    //污染指数
    aqi: '',
    //污染程度
    quality: '',
    //风力
    windPower: '',
    //风向
    windDirection: '',
    //城市
    city: '',    
  },

  onLoad: function () {

    var that = this

    wx.getLocation({
      success: function (res) {
        //通过经纬度请求数据
        wx.request({
          url: 'http://route.showapi.com/9-5',
          data: {
            showapi_appid: '11697',
            showapi_sign: '6c0c15c5ec61454dac5288cea2d32881',
          
            from: '5',
            lng: res.longitude,
            lat: res.latitude,
          },
          success: function (res) {

            that.setData({
              //改变加载状态
              loading: true,
              //解析json
              currentTemperature: res.data.showapi_res_body.now.temperature,
              nightAirTemperature: res.data.showapi_res_body.f1.night_air_temperature,
              dayAirTemperature: res.data.showapi_res_body.f1.day_air_temperature,
              weather: res.data.showapi_res_body.now.weather,
              aqi: res.data.showapi_res_body.now.aqi,
              quality: res.data.showapi_res_body.now.aqiDetail.quality,
              windPower: res.data.showapi_res_body.now.wind_power,
              windDirection: res.data.showapi_res_body.now.wind_direction,
              city: res.data.showapi_res_body.now.aqiDetail.area
              
            })
          }
        })

      }
    })

  }
})
