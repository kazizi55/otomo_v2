import Vue from 'vue';
import Router from 'vue-router';
const Home = () => import(/* webpackChunkName: "Home" */ './views/Home.vue');
const Header = () => import(/* webpackChunkName: "Header" */ './views/Header.vue');
const Band = () => import(/* webpackChunkName: "Band" */ './views/band/Index.vue');
const Session = () => import(/* webpackChunkName: "Session" */ './views/session/Index.vue');
const Live = () => import(/* webpackChunkName: "Live" */ './views/live/Index.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes:[
    {
      path: '/',
      components: {
        default: Home,
        header: Header
      }
    },
    {
      path: '/band',
      components: {
        default: Band,
        header: Header
      }
    },
    {
      path: '/session',
      components: {
        default: Session,
        header: Header
      }
    },{
      path: '/live',
      components: {
        default: Live,
        header: Header
      }
    }
  ]
})