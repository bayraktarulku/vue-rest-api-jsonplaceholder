import Vue from 'vue'
import App from './App.vue'

// Buefy => To use all the features
// import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'
// Vue.use(Buefy)

// To use table the features
import Table from 'buefy/dist/components/table'
import 'buefy/dist/buefy.css'
Vue.use(Table)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
