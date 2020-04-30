import Vue from 'vue';
import Router from 'vue-router';
const Home = () => import(/* webpackChunkName: "Home" */ './views/Home.vue');
const SignIn = () => import(/* webpackChunkName: "SignIn" */ './views/SignIn.vue');
const SignUp = () => import(/* webpackChunkName: "SignUp" */ './views/SignUp.vue');
const Header = () => import(/* webpackChunkName: "Header" */ './views/Header.vue');
const UserShow = () => import(/* webpackChunkName: "UserShow" */ './views/user/Show.vue');
const Band = () => import(/* webpackChunkName: "Band" */ './views/band/Index.vue');
const BandShow = () => import(/* webpackChunkName: "BandShow" */ './views/band/Show.vue');
const JamSession = () => import(/* webpackChunkName: "JamSession" */ './views/jam_sessions/Index.vue');
const JamSessionShow = () => import(/* webpackChunkName: "JamSessionShow" */ './views/jam_sessions/Show.vue');
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
      path: '/signin',
      components: {
        default: SignIn,
        header: Header
      }
    },
    {
      path: '/signup',
      components: {
        default: SignUp,
        header: Header
      }
    },
    {
      path: '/user/:id',
      name: 'UserShow',
      components: {
        default: UserShow,
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
      path: '/jam_session',
      components: {
        default: JamSession,
        header: Header
      }
    },
    {
      path: '/jam_session/:id',
      name: 'JamSessionShow',
      component: JamSessionShow
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
    }
  ]
})