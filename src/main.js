import Vue from 'vue'
import App from './App.vue'
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'

Vue.component('page-header', PageHeader);
Vue.component('page-footer', PageFooter);

new Vue({
  el: '#app',
  render: h => h(App)
})
