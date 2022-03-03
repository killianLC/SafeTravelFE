<template>
  <div class="grid">
    <div class="col-12 md:col-6 lg:col-4">
      <BasicInformation v-if="city.id" :city="city" />
    </div>

    <div class="col-12 md:col-6 lg:col-4" v-if="city.imageMap">
      <Carte :imageMap="city.imageMap" />
    </div>

    <div class="col-12 md:col-6 lg:col-4" v-if="city.average"><GlobalRating :note="city.average" /></div>
    <div class="col-12 md:col-6 lg:col-4"><Weather :city="city" /></div>
    <div class="col-12 md:col-6 lg:col-4" v-if="false">
      <Pictures :name="city.name" />
    </div>
    <div class="col-12 md:col-6 lg:col-4"><News :name="city.name" /></div>

    <div class="col-12 md:col-12"> 
      <Commentaire :city="city" :v-if="city.comments?.length > 0"/>
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
import Weather from "./weather/Weather.vue";
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
    Weather,
  },
  data() {
    return {
      city: { name: this.$route.params.name, comments:[], imageMap: "" },
    };
  },
  created() {
    axios
      .get("http://localhost:8080/public/city/" + this.$route.params.name)
      .then((response) => {
        this.city = response.data;
        axios
          .get("http://localhost:8080/data_api/city/" + this.$route.params.name)
          .then((response) => {
            this.city.data_api = response.data[0];

            let lat = this.city.data_api.lat;
            let lon = this.city.data_api.lon;
            this.city.imageMap =
              "https://static-maps.yandex.ru/1.x/?lang=fr-FR&ll=" +
              lon +
              "," +
              lat +
              "&z=13&l=map&size=600,450";

            axios
              .get("http://localhost:8080/data_api/meteo/" + lat + "/" + lon)
              .then((response) => {
                this.city.meteo = response.data;
              });

            axios
              .get(
                "http://localhost:8080/data_api/city_info/" +
                  this.$route.params.name
              )
              .then((response) => {
                this.city.population = response.data[0].population;
                this.city.region = response.data[0].codeRegion;
                this.city.departement = response.data[0].codeDepartement;
              });

            axios
              .get(
                "http://localhost:8080/public/city/average/" +
                  this.$route.params.name
              )
              .then((response) => {
                this.city.average = response.data.rating_average;
              });
          });
      })
      .catch(() => {
        this.$toast.add({
          severity: "error",
          summary: "Erreur",
          detail: "La ville " + this.$route.params.name + " n'existe pas",
          life: 3000,
        });
        this.$router.push({ name: "home" });
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
