import { mapGetters } from 'vuex'



export const loginMixin = {
  computed: {
    ...mapGetters([
      'currentUser',
    ])
  },
  methods: {
    
  }
}
