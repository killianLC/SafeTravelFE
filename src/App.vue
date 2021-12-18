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
}
</style>
