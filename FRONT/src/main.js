// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import Swiper from 'swiper';

import { store } from './store'


Vue.prototype.$http = axios
Vue.config.productionTip = false


Vue.component('panierProfile', {
  template: "<p>HELLO</p>"
});

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

var mySwiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: false,
});
