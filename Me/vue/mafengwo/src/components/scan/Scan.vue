<template>
  <div class="scan">
    <header>
      <p @click="closeScan">返回</p>
      <span>请扫码二维码</span>
      <p @click="scanImg">相册</p>
    </header>
    <div id="bcid">
      <div style="height:40%"></div>
      <p class="tip">...载入中...</p>
    </div>
  </div>
</template>

<script>
let scan = null
export default {
  data() {
    return {
      codeUrl: ""
    }
  },
  components: {
  },
  mounted() {
    //跳转时自动开启
    this.startRecognize()
  },
  methods: {
    // 创建扫描控件
    startRecognize() {
      let that = this
      if (!window.plus) return
      scan = new plus.barcode.Barcode(
        "bcid",
        [plus.barcode.QR, plus.barcode.EAN8, plus.barcode.EAN13],
        {
          frameColor: "#009DE2",
          scanbarColor: "#009DE2"
        }
      )
      //scan.onmarked = onmarked

      // 开始扫描
      scan.start()
      function onmarked(type, result, file) {
        switch (type) {
          case plus.barcode.QR:
            type = "QR"
            break
          case plus.barcode.EAN13:
            type = "EAN13"
            break
          case plus.barcode.EAN8:
            type = "EAN8"
            break
          default:
            type = "其它" + type
            break
        }
        result = result.replace(/\n/g, "")
        that.codeUrl = result
        window.localStorage.codeUrl = result
       // alert(result)
        that.closeScan()
      }
    },
    // 关闭返回
    closeScan() {
      console.log('取消扫描')
      // if (!window.plus) return
      // scan.close()
      this.$router.push({ path: '/Mine'})
    },
    scanImg() {
      // 从系统相册选择文件
      if (!window.plus) return
      plus.gallery.pick(
        function(path) {
         // alert(path)
          plus.barcode.scan(
            path,
            function(type, result) {
             // alert("Scan success:(" + type + ")" + result)
              window.localStorage.codeUrl2 = result
            },
            function(e) {
              console.log(e)
              window.localStorage.codeUrl2 = e
              plus.nativeUI.alert("如果图片无法识别,请用扫码上传")
            }
          )
        },
        function(e) {
          alert("取消选择图片")
        },
        { filter: "image" }
      )
    }
  }
}
</script>
<style lang="stylus" scoped>
.scan
  height 100vh
  width 100%
  position relative
  box-sizing border-box
  #bcid
    width 100%
    position absolute
    left 0
    right 0
    top 1rem
    bottom 0
    z-index 151
    text-align center
    color #fff
    background #ccc
  header
    position absolute
    display flex
    justify-content space-between
    font-size 16px
    color #009DE2
    left 0.3rem
    top 0
    right 0.3rem
    height 1rem
    line-height 1rem
    z-index 2
    span
      color #000
</style>
