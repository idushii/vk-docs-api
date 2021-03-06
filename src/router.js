import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App.vue'
import NoteNew from './NoteNew.vue'
import NoteEdit from './NoteEdit.vue'
import DocsPage from './DocsPage.vue'
import Upload from './Upload.vue'

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
    {
      path: '/Upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/NoteNew',
      name: 'NoteNew',
      component: NoteNew
    },
    {
      path: '/NoteEdit/:id',
      name: 'NoteEdit',
      component: NoteEdit
    },
    
  ]
})