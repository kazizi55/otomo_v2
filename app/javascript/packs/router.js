import Vue from 'vue';
import Router from 'vue-router';
const Home = () => import(/* webpackChunkName: "Home" */ './views/Home.vue');
const Header = () => import(/* webpackChunkName: "Header" */ './views/Header.vue');
const Band = () => import(/* webpackChunkName: "Band" */ './views/band/Index.vue');
const BandShow = () => import(/* webpackChunkName: "BandShow" */ './views/band/Show.vue');
const Session = () => import(/* webpackChunkName: "Session" */ './views/session/Index.vue');
const SessionShow = () => import(/* webpackChunkName: "SessionShow" */ './views/session/Show.vue');
const Live = () => import(/* webpackChunkName: "Live" */ './views/live/Index.vue');
const LiveShow = () => import(/* webpackChunkName: "LiveShow" */ './views/live/Show.vue');


Vue.use(Router);

export default new Router({
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
      path: '/band/:id',
      name: 'BandShow',
      component: BandShow
    },
    {
      path: '/session',
      components: {
        default: Session,
        header: Header
      }
    },
    {
      path: '/session/:id',
      name: 'SessionShow',
      component: SessionShow
    },
    {
      path: '/live',
      components: {
        default: Live,
        header: Header
      }
    },
    {
      path: '/live/:id',
      name: 'LiveShow',
      component: LiveShow
    },
  ]
})