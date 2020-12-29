// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './../static/js/store' // 使用vuex， 将加入购物车的商品用store来存储
import adds from './../static/js/addArray' // 导入addArray 使用es6的方法

Vue.config.productionTip = false

Vue.prototype.$go = function (path, number) {
  this.$router.push({path: path, query: {id: number}})
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 全局使用store
  adds, // 使用es6的
  components: { App },
  template: '<App/>'
})
