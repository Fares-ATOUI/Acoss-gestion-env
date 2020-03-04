import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons  } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import Home from './components/ChartAppli.vue'
import TB from './components/TB.vue'
import Charts from './components/ChartsVue.vue'
import Projet_mm_date_mep from './components/maquette/projet_mm_date_mep.vue'
import Form from './components/form'
import Timeline from './components/Timeline'

import CoreuiVue from '@coreui/vue';
import CoreuiVueCharts from '@coreui/vue-chartjs'
import VueRouter from 'vue-router'
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.use(VueRouter);

Vue.use(CoreuiVue);
// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(CoreuiVueCharts)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

const routes = [
  {path: '/charts', component: Charts},
  {path: '/projet_mm_date_mep', component: Projet_mm_date_mep},
  {path: '/tableau_de_Bord', component: TB},
  {path: '/', component: Home},
  {path: '/form', component: Form},
  {path: '/timeline', component: Timeline}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
 
  render: h => h(App)
}).$mount('#app')
 