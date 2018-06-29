import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Commander from '@/components/Commander'
import Burger_create from '@/components/Burger_create'
import Connexion from'@/components/Connexion'
import Inscription from'@/components/Inscription'
import ResultBurger from'@/components/ResultBurger'
import Panier from'@/components/Panier'



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
    },
    {
      path: '/connexion',
      name: 'Connexion',
      component: Connexion
    },
    {
      path: '/inscription',
      name: 'Inscription',
      component: Inscription
    },
    {
      path: '/votre_burger',
      name: 'ResultBurger',
      component: ResultBurger
    },
    {
      path: '/votre_panier',
      name: 'Panier',
      component: Panier
    }
  ]
})
