<template>
  <Card>
    <template #title>
      <i class="pi pi-heart" />&nbsp;Mes villes favorites
    </template>
    <template #content>
      <div class="grid">
        <div
          class="col-12 md:col-12 lg:col-6"
          v-for="city in cities"
          :key="city.name"
        >
          <City @detele-city-event="deleteCityFromCities" v-if="city.id" :city="city" />
        </div>
      </div>
    </template>
    <template #footer>
      <router-link to="/" class="no-underline"
        ><Button icon="pi pi-plus-circle" label="Découvrir de nouvelles villes"
      /></router-link>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";
import City from "./City.vue";
import axios from "axios";

export default {
  name: "Favoris",
  components: {
    Card,
    Button,
    City,
  },
  mounted() {
    this.getAllCitiesFavories()
  },
  data() {
    return {
      cities: [],
    }
  },
  methods:{
    getAllCitiesFavories(){
      axios.get("http://localhost:8080/users/"+JSON.parse(sessionStorage.getItem("user")).id).then((user) => {
        if(user.data.citiesFavoris){
          user.data.citiesFavoris.forEach((c) => this.cities.push(c));
        }
      });
    },
    deleteCityFromCities(cityDeleted){
      let i = this.cities.indexOf(cityDeleted);
      this.cities.splice(i,1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

