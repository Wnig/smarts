// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import Home from './components/Home'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'


Vue.use(VueRouter)

Vue.config.productionTip = false

//配置路由
const router = new VueRouter({
	routes: [{path: "/", component: Home,}]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
