import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App.vue'
import Login from './Login.vue'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path: '/Login',
      component: Login
    },
  ]
})