<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'

export default {
  name: 'scroll',
  props: {
    /**
      * 1 滚动的时候会派发scroll事件，会节流。
      * 2 滚动的时候实时派发scroll事件，不会节流。
      * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
      */
    probeType: {
      type: Number,
      default: 1
    },
    /**
      * 点击列表是否派发click事件
      */
    click: {
      type: Boolean,
      default: true
    },
    /**
      * 是否开启横向滚动
      */
    scrollX: {
      type: Boolean,
      default: false
    },
    /**
      * 是否派发滚动事件
      */
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
      * 列表的数据
      */
    data: {
      type: Array,
      default: null
    },
    pullup: {
      type: Boolean,
      default: false
    },
    pulldown: {
      type: Boolean,
      default: false
    },
    beforeScroll: {
      type: Boolean,
      default: false
    },
    /**
      * 当数据更新后，刷新scroll的延时。
      */
    refreshDelay: {
      type: Number,
      default: 20
    },
    direction: {
      type: String,
      default: DIRECTION_V
    }
  },
  mounted () {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods:{
    _initScroll () {
      if (!this.$refs.wrapper){
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: this.click,
        probeType: this.probeType,
        eventPassthrough: this.direction === DIRECTION_V ? DIRECTION_H : DIRECTION_V
      })
      // 监听 滑动， 并抛出其滚动距离
      if (this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scrol', pos)
        })
      }
    },
    refresh () {
      this.scroll && this.scroll.refresh()
      // if (this.scroll) {
      //   this.scroll.refresh()
      // }
    }
  },
  watch: {
    // 监听数据变化，延时XX时间后刷新better-scroll的效果，保证滚动效果正常
    data () {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  }
}
</script>

<style>

</style>
