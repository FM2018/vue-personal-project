// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import vueDragDrag from 'vue-dragdrag'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(vueDragDrag)

//如果不设置mode，开头会有#


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
