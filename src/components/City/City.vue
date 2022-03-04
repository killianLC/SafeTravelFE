<template>
  <div class="grid">
    <div class="col-12 md:col-6 lg:col-4">
      <BasicInformation v-if="city.id" :city="city" />
    </div>

    <div class="col-12 md:col-6 lg:col-4" v-if="city.imageMap">
      <Carte :imageMap="city.imageMap" />
    </div>

    <div class="col-12 md:col-6 lg:col-4" v-if="city.average"><GlobalRating :note="city.average" /></div>
    <div class="col-12 md:col-6 lg:col-4" v-if="city.meteo"><Weather :city="city" /></div>
    <div class="col-12 md:col-6 lg:col-4" v-if="false">
      <Pictures :name="city.name" />
    </div>
    <div class="col-12 md:col-6 lg:col-4"><News :name="city.name" /></div>
    <div class="col-12 md:col-6 lg:col-8"><LineChart :x-option="dateDataSets" y-axe-name="Notes attribués" :data-set-rating="dataSetsRating" :data-set-meteo="dataSetsMeteo" x-axe-name="Date des dernières notes" /></div>

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
import LineChart from "./statistique/LineChart.vue";
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
    LineChart,
  },
  data() {
    return {
      city: { name: this.$route.params.name, comments:[], imageMap: "" },
      dataSetsMeteo:[],
      dataSetsRating:[],
      dateDataSets:[]
    };
  },
  methods:{
    getCriterias(){
      axios
          .get("http://localhost:8080/public/city/" + this.$route.params.name+"/notes")
          .then((response) => {
            if(response.data.meteo?.length > 6){
              response.data.meteo.splice(response.data.meteo.length-7,response.data.meteo.length)
                  .forEach((m) => this.dateDataSets.push(m.date));
            }else{
              response.data.meteo?.forEach((m) => this.dateDataSets.push(m.date));
            }

            response.data.meteo?.forEach((m,index) => {
              this.dataSetsMeteo[index] = response.data.meteo[index].note;
            })
            response.data.ratings?.forEach((r,index) => {
              this.dataSetsRating[index] = response.data.meteo[index].note;
            })
          })
          .catch(()=>console.log("Criteria not found"))
    }
  },
  created() {
    this.getCriterias(),
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
                "http://localhost:8080/public/city/"+ this.$route.params.name + "/average/")
              .then((response) => {
                response.data.rating_average = Math.round(response.data.rating_average * 100) / 100;
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
.grid :deep(.min-size-card) {  
  min-height: 310px;
}
</style>
