import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { createWebHashHistory, createRouter } from 'vue-router'
import axios from 'axios';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';

import 'primevue/resources/themes/saga-orange/theme.css'     //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

import '/node_modules/primeflex/primeflex.css'               //primeFlex


import City from './components/city/City.vue';
import Connexion from './components/connexion/Connexion.vue';
import Home from './components/home/Home.vue';
import Inscription from './components/inscription/Inscription.vue';
import Logout from './components/logout/Logout.vue';
import Profil from './components/profil/Profil.vue';
import TravelDetails from './components/travel/travelDetails/TravelDetails.vue';
import Travels from './components/travel/Travels.vue';
import TravelCreate from './components/travel/TravelCreate.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/inscription',
    component: Inscription,
    name: 'inscription'
  },
  {
    path: '/connexion',
    component: Connexion,
    name: 'connexion'
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
  },
  {
    path: '/travels',
    component: Travels,
    name: 'travels'
  },
  {
    path: '/travel/:id',
    component: TravelDetails,
    name: 'travelDetails'
  },
  {
    path: '/travelCreate',
    component: TravelCreate,
    name: 'TravelCreate'
  },
  {
    path: '/logout',
    component: Logout,
    name: 'logout'
  }
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

// Request interceptor
axios.interceptors.request.use(function (config) {
  // Add JWT Token to request
  const token = sessionStorage.getItem("JWT_token");
  if (token) {
    config.headers.common["Authorization"] = "Bearer " + token;
    config.headers.common["UtilisateurId"] =  JSON.parse(sessionStorage.getItem("user")).id;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

// Response interceptor
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status) {
    switch (error.response.status) {
      case 401:
        sessionStorage.clear();      
        break;
    }
    return Promise.reject(error.response);
  }

  return Promise.reject(error);
});

const store = createStore({
  state () {
    return {
      isLogged: false,
      username: ""
    }
  },
  mutations: {
    setIsLogged (state, isLogged) {
      state.isLogged = isLogged;
    },
    setUsername (state, name) {
      state.username = name;
    }
  }
})

const app = createApp(App);

app.use(router);
app.use(store)
app.use(PrimeVue);
app.use(ToastService);
app.use(ConfirmationService);

app.mount('#app');