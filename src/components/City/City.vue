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
    this.city = {
      id: 1,
      globalNote: 3.5,
      name: this.$route.params.name,
      country: "fr",
      comments: [
        {
          id: 1,
          description: "On enlève les bouchons sur la rocade et c'est ok.",
          date: "2022-02-01",
          rating: 3,
          user: {
            id: 1,
            firstname: "yoann",
            lastname: "yoann",
          },
        },
      ],
      notes: [
        {
          id: 2,
          note: 4.1,
          date: "2022-02-08",
          criterion: {
            id: 2,
            name: "Météo",
          },
        },
        {
          id: 3,
          note: 3.5,
          date: "2022-02-10",
          criterion: {
            id: 1,
            name: "Air",
          },
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
