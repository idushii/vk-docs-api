import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router'

var app = new Vue({
  el: '#app',
  template: '<router-view></router-view>',
  router,
  data: {
    auth: { status: '' }
  }
})

window.router = app.$router
window.DataApp = app.$data;
VK.init({ apiId: 6047893 });

moment.locale("ru");
