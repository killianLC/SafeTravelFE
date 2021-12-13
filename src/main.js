import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import VueRouter from 'vue-router'

import 'primevue/resources/themes/saga-orange/theme.css'     //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

import '/node_modules/primeflex/primeflex.css'               //primeFlex


const app = createApp(App);

app.use(VueRouter);
app.use(PrimeVue);

app.mount('#app');