App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
      console.log('初始化触发')
    // wx.getUserInfo({
    //     success:function(res){
    //         console.log(res)
    //     }
    // })

    setTimeout(()=>{
        let err=new Error()
        throw err   //抛出错误  系统错误
    },3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('启动触发')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('最小化进入后台触发')  //最小化进入后台页面后 后台存在两小时  两小时之后就会关闭
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('接收错误触发')
    // console.log(msg)
  }
})
