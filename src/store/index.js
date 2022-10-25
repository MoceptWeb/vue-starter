import Vue from 'vue'
import Vuex from 'vuex'
import hello from './hello'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    hello
  }
})

/**

用法
    1\    import { mapActions, mapGetters, mapMutations } from 'vuex'

        methods: {
            ...mapMutations('topBar', {
                addButton: 'addButton',
            }),
            ...mapActions('bookmark', {
                deleteMarkBatch: 'deleteMarkBatch',
            }),

        }

    2、getter
        1、this.$store.getters[]
        2、    import { mapGetters } from 'vuex'
                computed: {
                            ...mapGetters('homepage', {
                                loadingShow: 'loadingShow'
                            })
                        },
 
 */
