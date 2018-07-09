import Vue from 'vue'
import App from './App.vue'
import router from './router'
var VueFire = require('vuefire')
import store from './store'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./sass/css/animate.css";





Vue.use(VueFire)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
