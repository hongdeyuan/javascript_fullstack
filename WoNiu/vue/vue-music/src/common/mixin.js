import { mapActions } from 'vuex'

export const searchMixin = {
  data () {
    return {
      query: ''
    }
  },
  methods: {
    onQueryChange (query) {
      // console.log(query)
      // trim去空格
      this.query = query.trim()
      // 看效果用的
    },
    blurInput () {
      this.$refs.searchBox.blur()
    },
    saveSearch (song) {
      this.$refs.searchBox.setQuery(song)
      this.saveSearchHistory(this.query)
    },
    ...mapActions([
      'saveSearchHistory',
      'deleteSearchHistory',
      'clearSearchHistory'
    ])
  }
}