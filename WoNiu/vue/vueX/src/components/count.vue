<template>
  <div class="count">
    <h2>{{str}}</h2>
    <!-- $store 是指 VueX 自带的， 不是main.js定义的那个 -->
    <h3>{{count}}</h3>
    <button @click="$store.commit('add')">+</button>
     <button @click="add1(5)">+5</button>
    <button @click="$store.commit('add1', 20)">+20</button>
    <button @click="addAction(20)">addAction: +20</button>
    <button @click="test">-</button>
    <button @click="subtractAction()">subtractAction: -</button>
    <!-- <h3>{{$store.state.count}}</h3> -->
    <h3>每次加100： {{getCount}}</h3>
  </div>
</template>

<script>
// 为什么mapMutations 要做成同步 ，mapActions做异步的？
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  // mounted () {
  //   this.myCount = this.$store.state.count
  // },
  // computed: {
  //   myCount () {
  //     return this.$store.state.count
  //   }
  // },
  // computed: mapState({
  //   count: state => state.count
  //   // myCount (state) {
  //   //   return state.count
  //   // }
  // }),
  // computed: mapState(['count']),
  computed: {
    ...mapState([
      'count',
      'str'
    ]),
    // ...mapGetters([
    //   'getCount'
    // ])
    getCount (state) {
      return state.count + 100
    }
  },
  methods: {

    //同步的
    ...mapMutations([
      'add',
      'add1',
      'subtract'
    ]),

    // 异步的
    ...mapActions([
      'addAction',
      'subtractAction'
    ]),

    test () {
      this.subtractAction()
      console.log(1)
    }
  }
}
</script>

<style>

</style>
