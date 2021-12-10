<template>
  <div class="p-grid">
    <div class="p-col-6 p-offset-3"><SearchBar /></div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";

export default {
  name: "Home",
  components: {
    SearchBar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
