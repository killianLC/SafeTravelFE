<template>
  <Toast />
  <NavBar></NavBar>
  <router-view class="m-2"></router-view>
</template>

<script>
import NavBar from './components/navbar/NavBar.vue';
import Toast from 'primevue/toast';

export default {
  name: 'App',
  components: {
    NavBar,
    Toast,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
  margin: 0;
  background-image: url(https://cdn.dribbble.com/users/2925801/screenshots/14267264/media/d6a51702546f256b6d08ead24f6e6ac2.jpg);
  background-attachment: fixed;
}

.bg-dark {
  background-color: #1d1e27 !important;
}

.text-dark {
  color: #1d1e27 !important;
}
</style>
