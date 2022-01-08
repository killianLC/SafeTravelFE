<template>
  <NavBar></NavBar>
  <router-view class="m-2"></router-view>
</template>

<script>
import NavBar from './components/navbar/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
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

@keyframes p-progress-spinner-color {
    100%,
    0% {
        stroke: #d62d20;
    }
    40% {
        stroke: #d62d20;
    }
    66% {
        stroke: #d62d20;
    }
    80%,
    90% {
        stroke: #d62d20;
    }
}
</style>
