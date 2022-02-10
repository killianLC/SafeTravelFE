<template>
  <Card>
    <template #title>
      <i class="pi pi-star" />&nbsp;Mes notes
    </template>
    <template #content>
      <div class="grid">
        <div
          class="col-6"
          v-for="city in cities"
          :key="city.name"
        >
          <Rate :city="city" />
        </div>
      </div>
    </template>
    <template #footer>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import Rate from "./Rate.vue";

export default {
  name: "Ratings",
  components: {
    Card,
    Rate,
  },
  data() {
    return {
      cities: [
        {
          name: "Paris",
          rate: 4.2,
          flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
        },
        {
          name: "Barcelone",
          rate: 3.6,
          flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
        },
        {
          name: "Rome",
          rate: 4.5,
          flag: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg?",
        },
        {
          name: "Berlin",
          rate: 1.4,
          flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
        },
        {
          name: "Stockholm",
          rate: 3.6,
          flag: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg",
        },
        {
          name: "Lyon",
          rate: 5,
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

