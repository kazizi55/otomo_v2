import Vue from 'vue'
import App from '../app.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import { securedAxiosInstance, plainAxiosInstance } from './axios'
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"
import "@mdi/font/css/materialdesignicons.css"
import "material-design-icons-iconfont/dist/material-design-icons.css"
import '@fortawesome/fontawesome-free/css/all.css'
import detectBreakpoint from './mixin/detectBreakpoint'

Vue.config.productionTip = true

Vue.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance
})

Vue.use(Vuetify)
const vuetify = new Vuetify({
  icons: {
    iconfont: "md" || "mdi" || "fa"
  },
  theme: {
    themes: {
      light: {
        facebook: '#3B5998',
        twitter: '#1DA1F2',
        instagram: '#000',
        line: '#00c300'
      },
    }
  }
})

Vue.mixin(detectBreakpoint)

document.addEventListener('DOMContentLoaded', function() {
  window.app = new Vue({
    el: '#app',
    router,
    store,
    securedAxiosInstance,
    plainAxiosInstance,
    vuetify,
    render: h => h(App)
  })
  document.body.appendChild(app.$el)
})
