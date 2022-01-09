<template>
  <Card>
    <template #title>
      <i class="pi pi-heart" />&nbsp;Mes villes favorites
    </template>
    <template #content>
      <div class="grid">
        <div
          class="col-12 md:col-4 lg:col-3"
          v-for="city in cities"
          :key="city.name"
        >
          <City :city="city" />
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

export default {
  name: "Favoris",
  components: {
    Card,
    Button,
    City,
  },
  data() {
    return {
      cities: [
        {
          name: "Paris",
          score: "6/10",
          flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
        },
        {
          name: "Barcelone",
          score: "7/10",
          flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
        },
        {
          name: "Rome",
          score: "4/10",
          flag: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg?",
        },
        {
          name: "Berlin",
          score: "5/10",
          flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
        },
        {
          name: "Stockholm",
          score: "9/10",
          flag: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg",
        },
        {
          name: "Lyon",
          score: "8/10",
          flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

