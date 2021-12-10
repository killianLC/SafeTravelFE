<template>
  <NavBar></NavBar>
  <Home/>
</template>

<script>
import Home from './components/home/Home.vue'
import NavBar from './components/navbar/NavBar.vue'

export default {
  name: 'App',
  components: {
    Home,
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
