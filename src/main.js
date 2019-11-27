import Vue from 'vue'
import App from './App.vue'


// Buefy => To use all the features
// import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'
// Vue.use(Buefy)

// To use table the features
import Table from 'buefy/dist/components/table'
import Button from 'buefy/dist/components/button'
// for Datetimpicker
// import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Table)
Vue.use(Button)
// Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

