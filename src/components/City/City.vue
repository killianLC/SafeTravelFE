<template>
  <div class="grid">
    <div class="col-12 md:col-8"><BasicInformation :city="city" /></div>
    <div class="col-12 md:col-4"><Carte :city="city" /></div>
  </div>
  <div class="col-12 md:col-12"><Commentaire :city="city" /></div>
</template>

<script>
import BasicInformation from "./BasicInformation.vue";
import Carte from "./Carte.vue";
import Commentaire from "./Commentaire.vue";

export default {
  name: "City",
  components: { BasicInformation, Carte, Commentaire},
  data() {
    return {
      city: Object,
    };
  },
  created() {
    fetch(
      "https://api.teleport.org/api/cities/?search=" + this.$route.params.name
    )
      .then((resp) => resp.json())
      .then((data) => {
        fetch(data._embedded["city:search-results"][0]._links["city:item"].href)
          .then((resp) => resp.json())
          .then((data) => {
            this.city = data;
            console.log(this.city);
          });
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
