import Vue from 'vue'
import App from '../app.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { securedAxiosInstance, plainAxiosInstance } from './axios'

Vue.use(axios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance
})

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    router,
    store,
    securedAxiosInstance,
    plainAxiosInstance,
    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)

  console.log(app)
})
