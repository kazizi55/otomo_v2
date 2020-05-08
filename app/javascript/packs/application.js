import Vue from 'vue'
import App from '../app.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import { securedAxiosInstance, plainAxiosInstance } from './axios'

Vue.config.productionTip = true

Vue.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance
})

document.addEventListener('DOMContentLoaded', function() {
  window.app = new Vue({
    el: '#app',
    router,
    store,
    securedAxiosInstance,
    plainAxiosInstance,
    render: h => h(App)
  })
  document.body.appendChild(app.$el)
})
