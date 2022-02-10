<template>
  <div class="grid h-10rem sm:h-10rem m-0 align-content-center">
    <div class="col-12 sm:col-8 sm:col-offset-2"><SearchBar /></div>
  </div>
  <div class="grid m-0">
    <div class="col-12 sm:col-8 sm:col-offset-2"><Rank :cities="cities" /></div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import Rank from "./rank/Rank.vue";
import axios from "axios";

export default {
  title: "Home",
  name: "Home",
  components: {
    SearchBar,
    Rank,
  },
  data() {
    return {
      cities: []
    }
  },
  created() {
    axios
      .get("http://localhost:8080/public/top10")
      .then((response) => (
        this.cities = response.data));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
