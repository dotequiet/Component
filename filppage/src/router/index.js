import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import book from '@/components/filppage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  saveScrollPosition: true,
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/book',
      name: 'book',
      component: book
    }
  ]
})
