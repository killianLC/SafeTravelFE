<template>
  <NavBar></NavBar>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to SafeTravel"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/navbar/NavBar.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
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
