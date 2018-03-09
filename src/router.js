import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App.vue'
import DocsPage from './DocsPage.vue'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path: '/DocsPage',
      name: 'DocsPage',
      component: DocsPage
    },
  ]
})