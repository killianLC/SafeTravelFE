<template>
  <div class="grid" v-if="travel">
    <div class="col-12">
      <Breadcrumb :home="home" :model="items" />
    </div>
    <div class="col-12 md:col-12">
      <PresentationTravel
        :travel="travel"
        :isParticipant="isParticipant"
        :isOrganizer="isOrganizer"
      />
    </div>
    <div class="col-12 md:col-8" v-if="isOrganizer">
      <StepsTravel :travel="travel" />
    </div>
    <div class="col-12 md:col-4" v-if="isOrganizer">
      <Participants :travel="travel" />
    </div>
  </div>
</template>

<script>
import Participants from "./Participants.vue";
import StepsTravel from "./Edit.vue";
import Breadcrumb from "primevue/breadcrumb";
import PresentationTravel from "./PresentationTravel.vue";
import axios from "axios";

export default {
  name: "TravelDetails",
  components: {
    Participants,
    StepsTravel,
    Breadcrumb,
    PresentationTravel,
  },
  data() {
    return {
      travel: null,
      isOrganizer: false,
      isParticipant: true,
      home: { icon: "pi pi-home", to: "/" },
      items: [{ label: "Mes voyages", to: "/travels" },{ label: "Voyage" }],
    };
  },
  created() {
    axios
      .get("http://localhost:8080/trips/" + this.$route.params.id)
      .then((response) => {
        this.travel = response.data;
        this.isOrganizer =
          JSON.parse(sessionStorage.getItem("user")).id ===
          this.travel.organisateur.id;

        axios
          .get(
            "http://localhost:8080/trips/isParticipant/" + this.$route.params.id
          )
          .then(() => {
            this.isParticipant = false;
          })
          .catch(() => {
            this.isParticipant = true;
          });
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

