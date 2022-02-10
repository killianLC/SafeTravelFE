<template>
  <div class="grid h-10rem sm:h-30rem m-0 align-content-center">
    <div class="col-8 col-offset-2"><SearchBar /></div>
  </div>
  <Rank/>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import Rank from "./rank/Rank.vue";

export default {
  title: "Home",
  name: "Home",
  components: {
    SearchBar,
    Rank,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
