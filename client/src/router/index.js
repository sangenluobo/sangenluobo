import Vue from 'vue'
import Router from 'vue-router'
import Home from './../pages/Home'
import Login from './../pages/Login/Login'
import PaiChan from './../pages/PaiChan'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      component: Login,
      meta: {showBottomTabBar: true}
    },
    {
      path: '/paichan',
      component: PaiChan,
      meta: {showBottomTabBar: true}
    },
    {
      path: '/',
      redirect: '/home'
    },
  ]
})
