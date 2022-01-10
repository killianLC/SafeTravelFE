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
    <template #footer> </template>
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
          destination: "New-York",
          numberParticipants: "3",
          date: "12/12/2020",
        },
        {
          origin: "Brest",
          destination: "Nantes",
          numberParticipants: "1",
          date: "30/04/2022",
        },
        {
          origin: "Londres",
          destination: "Berlin",
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

