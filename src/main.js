import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from './util/axios'
Vue.config.productionTip = false

Vue.prototype.$axios = axios // 可以直接this.$axios 使用

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
