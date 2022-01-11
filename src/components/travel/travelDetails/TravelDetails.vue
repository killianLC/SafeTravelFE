<template>
  <div class="grid">
    <div class="col-12">
      <Breadcrumb :home="home" :model="items" />
    </div>
    <div class="col-12 md:col-8"><StepsTravel :travel="travel" /></div>
    <div class="col-12 md:col-4">
      <Participants :participants="travel.participants" />
    </div>
  </div>
</template>

<script>
import Participants from "./Participants.vue";
import StepsTravel from "./StepsTravel.vue";
import Breadcrumb from "primevue/breadcrumb";

export default {
  name: "TravelDetails",
  components: {
    Participants,
    StepsTravel,
    Breadcrumb
  },
  data() {
    return {
      travel: {
        steps: [
          {
            name: "Paris",
            flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
            date: "12/12/2020",
          },
          {
            name: "Nantes",
            flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
            date: "12/12/2020",
          },
          {
            name: "Brest",
            flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
            date: "12/12/2020",
          },
        ],
        participants: [
          {
            name: "John Doe",
          },
          {
            name: "Jean Doe",
          },
          {
            name: "Pierre Doe",
          },
        ],

        date: "12/12/2020",
      },
      home: { icon: "pi pi-home", to: "/" },
      items: [
        { label: "Mes voyages", to:"/travels" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

