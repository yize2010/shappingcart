import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import detail from '@/components/detail'
import cart from '@/components/cart'
import navb from '@/components/navb'

Vue.use(Router)

export default new Router({
  mode: 'history', // 去掉#
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        navb,
        index
      }
    },
    {
      path: '/detail',
      name: 'detail',
      components: {
        navb,
        detail
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    }
  ]
})
