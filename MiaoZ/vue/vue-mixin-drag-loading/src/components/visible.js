// 解决组件之间 可复用功能
let mixin = {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    open () {
      this.visible = true
    },
    close () {
      this.visible = false
    }
  }
}

export default mixin;
