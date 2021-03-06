import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-tree-view'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
