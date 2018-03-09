import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router'
import Docs from './Docs.vue'; Vue.component('docs', Docs);
import Auth from './Auth.vue'; Vue.component('Auth', Auth);

var app = new Vue({
  el: '#app',
  template: '<div class="container my-2"><div class="row"><Auth /><router-view></router-view></div></div>',
  router,
  data: {
    auth: { status: '' }
  },
  computed: {
    isLogin() {
      return this.auth.status == "connected" ? true : false
    }
  }
})

window.router = app.$router
window.DataApp = app.$data;
VK.init({ apiId: 6047893 });

moment.locale("ru");
