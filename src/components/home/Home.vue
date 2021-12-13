<template>
  <div class="grid h-10rem sm:h-30rem m-0 align-content-center">
    <div class="col-8 col-offset-2"><SearchBar /></div>
  </div>
  <Rank/>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import Rank from "./Rank.vue";

export default {
  name: "Home",
  components: {
    SearchBar,
    Rank,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid {
  background-image: url("https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fprd-dst-website-statics.2Es3.2Eeu-west-1.2Eamazonaws.2Ecom.2Fcontent.2Fuploads.2F2021.2F01.2Fchurch-2020258_1920.2Ejpg/1200x630/quality/80/grece-continentale.jpg");
  background-size: cover;
}
</style>
