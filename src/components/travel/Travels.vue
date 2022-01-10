<template>
  <Card>
    <template #title> <i class="pi pi-car" />&nbsp;Mes voyages </template>
    <template #content>
      <div class="grid">
        <div
          class="col-12 md:col-6"
          v-for="travel in travels"
          :key="travel"
        >
          <TravelItem :travel="travel" />
        </div>
      </div>
    </template>
    <template #footer>
      
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";
import TravelItem from "./TravelItem.vue";

export default {
  name: "Travels",
  components: {
    Card,
    TravelItem,
  },
  data() {
    return {
      travels: [
        {
          origin: "Paris",
          flagOrigin: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
          destination: "New-York",
          flagDestination: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
          numberParticipants: "3",
          date: "12/12/2020",
        },
        {
          origin: "Brest",
          flagOrigin: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
          destination: "Nantes",
          flagDestination: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
          numberParticipants: "1",
          date: "30/04/2022",
        },
        {
          origin: "Londres",
          flagOrigin: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg",
          destination: "Berlin",
          flagDestination: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
          numberParticipants: "6",
          date: "21/06/2021",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

