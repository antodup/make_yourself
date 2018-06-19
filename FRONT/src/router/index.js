import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Commander from '@/components/Commander'
import Burger_create from '@/components/Burger_create'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/commander',
      name: 'Commander',
      component: Commander
    },
    {
      path: '/creation_burger',
      name: 'Burger_create',
      component: Burger_create
    }
  ]
})
