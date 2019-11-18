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

// import Vue from 'vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

// const Home  = {
//   template: '<div>Home</div>'
// }

// const Login = {
//   template: '<div>Login</div>'
// }

// const About = {
//   template: '<div>About</div>'
// }

// const router = new VueRouter({
//   routes: [
//     { path: '/', component: Home },
//     { path: '/login', component: Login },
//     { path: '/about', component: About }
//   ]
// })

// new Vue({
//   router
// }).$mount('#app')
