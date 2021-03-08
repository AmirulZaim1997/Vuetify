import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import AppLogin from '@/components/AppLogin'
import AppContact from '@/components/AppContact'
import AppAbout from '@/components/AppAbout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/Login',
      name: 'AppLogin',
      component: AppLogin
    },
    {
      path: '/Contact',
      name: 'AppContact',
      component: AppContact
    },
    {
      path: '/About',
      name: 'AppAbout',
      component: AppAbout
    }



  ]
})
