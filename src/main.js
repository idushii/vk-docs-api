import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router'

new Vue({
  el: '#app',
  template: '<router-view></router-view>',
  router
})

//VK.init({ apiId: 6047893 });
// Виджет
VK.init({ apiId: 6401678 });
VK.Widgets.Auth("vk_auth", {"authUrl":"/Login"});
