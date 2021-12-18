import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { createWebHashHistory, createRouter } from 'vue-router'

import 'primevue/resources/themes/saga-orange/theme.css'     //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

import '/node_modules/primeflex/primeflex.css'               //primeFlex


import Home from './components/home/Home.vue';
import Profil from './components/profil/Profil.vue';
import City from './components/city/City.vue';
const routes = [
  {
    path: '/',
    component: Home,
    name: 'user',
  },
  {
    path: '/profil',
    component: Profil,
    name: 'profil'
  },
  {
    path: '/city/:name',
    component: City,
    name: 'city'
  }
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})


const app = createApp(App);

app.use(router);
app.use(PrimeVue);

app.mount('#app');