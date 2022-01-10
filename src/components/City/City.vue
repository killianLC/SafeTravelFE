<template>
  <div class="grid">
    <div class="col-12 md:col-4"><BasicInformation :city="city" /></div>
    <div class="col-12 md:col-4"><Covid :city="city" /></div>
    <div class="col-12 md:col-4"><GlobalRating :city="city" /></div>
    <div class="col-12 md:col-6 lg:col-4"><Carte :city="city" /></div>
    <div class="col-12 md:col-6 lg:col-4"><Weather :city="city" /></div>
    <div class="col-12 md:col-6 lg:col-4"><Pictures :city="city" /></div>
    <div class="col-12 md:col-6 lg:col-4"><Health :city="city" /></div>
    <div class="col-12 md:col-6 lg:col-4"><News :city="city" /></div>
    <div class="col-12 md:col-12"><Commentaire :city="city" /></div>
  </div>
</template>

<script>
import BasicInformation from "./informations/BasicInformation.vue";
import Carte from "./informations/Carte.vue";
import Commentaire from "./commentaires/Commentaire.vue";
import GlobalRating from "./rating/GlobalRating.vue";
import News from "./news/News.vue";
import Pictures from "./pictures/Pictures.vue";
import Covid from "./covid/Covid.vue";
import Weather from "./weather/Weather.vue";
import Health from '../city/health/Health.vue';

export default {
  name: "City",
  components: {
    BasicInformation,
    Carte,
    Commentaire,
    GlobalRating,
    News,
    Pictures,
    Covid,
    Weather,
    Health
  },
  data() {
    return {
      city: Object,
    };
  },
  created() {
    this.city = {
      name: this.$route.params.name,
      population: 10000,
      superficie: "105,40 km2",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
