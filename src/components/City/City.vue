<template>
  <div class="grid">
    <div class="col-12 md:col-6 lg:col-4">
      <BasicInformation :city="city" />
    </div>

    <div class="col-12 md:col-6 lg:col-4"><Covid :city="city" /></div>
    <div class="col-12 md:col-6 lg:col-4"><GlobalRating :city="city" /></div>
    <div class="col-12 md:col-6 lg:col-4"><Carte :name="city.name" /></div>
    <div class="col-12 md:col-6 lg:col-4"><Weather :city="city" /></div>
    <div class="col-12 md:col-6 lg:col-4"><Pictures :city="city" /></div>
    <div class="col-12 md:col-6 lg:col-4"><Health :city="city" /></div>
    <div class="col-12 md:col-6 lg:col-4"><News :name="city.name" /></div>

    <div class="col-12 md:col-12">
      <Commentaire :comments="city.comments" />
    </div>
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
import Health from "../city/health/Health.vue";
import axios from "axios";

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
    Health,
  },
  data() {
    return {
      city: Object,
    };
  },
  created() {
    axios
      .get("http://localhost:8080/cities/" + this.$route.params.name)
      .then((response) => {
        this.city = response.data;
      })
      .catch(() => {
        this.$toast.add({
          severity: "error",
          summary: "Erreur",
          detail: "La ville " + this.$route.params.name + " n'exsite pas",
          life: 3000,
        });
        this.$router.push({name: "home"});
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
