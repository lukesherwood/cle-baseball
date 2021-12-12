import Vue from "vue";
import VueRouter from 'vue-router'
import "./scss/main.scss";

import App from "./App.vue";
import Players from './views/Players'
import Player from './views/Player'

Vue.config.productionTip = false;
Vue.use(VueRouter)

const routes = [
  { path: '/player/:id', component: Player, props: true },
  { path: '/', component: Players, props: true },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
