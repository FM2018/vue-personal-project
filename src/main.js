// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/dist/css/swiper.min.css';

//注册组件
// import SwiperComponent from '../src/components/childComponents/swiper'
// Vue.component('swiper-component', SwiperComponent)


Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)
if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}

//如果不设置mode，开头会有#


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
