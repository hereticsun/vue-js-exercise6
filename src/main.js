import Vue from 'vue'
import App from './App.vue'
import HeaderPrimary from './components/common/header-primary.vue'
import FooterPrimary from './components/common/footer-primary.vue'

Vue.component('app-header', HeaderPrimary);
Vue.component('app-footer', FooterPrimary);

new Vue({
  el: '#app',
  render: h => h(App)
})
