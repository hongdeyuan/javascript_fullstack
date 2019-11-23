import Vue from 'vue'
import Vuex from 'vuex'

import com from './modules/com'
import music from './modules/music'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    com,
    music
  }
})
