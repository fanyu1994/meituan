import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import Vuex from 'vuex'
import axios from 'axios'

Vue.config.productionTip = false
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.baseURL = '/api'
Vue.use(Vuex)

require('../mock.js')


Vue.prototype.$store = store
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
