import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App.vue'
import DocsList from './DocsList.vue'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path: '/DocsList',
      component: DocsList
    },
  ]
})