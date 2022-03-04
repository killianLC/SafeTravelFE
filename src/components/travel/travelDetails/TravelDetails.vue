<template>
  
  <div class="grid">
    <div class="col-12">
      <Breadcrumb :home="home" :model="items" />
    </div>
    <ProgressSpinner v-if="travelsLoading" />
    <div class="col-12 md:col-12" v-if="!travelsLoading">
      <PresentationTravel
        :travel="travel"
        :isParticipant="isParticipant"
        :isOrganizer="isOrganizer"
      />
    </div>
    <div class="col-12 md:col-8" v-if="isOrganizer">
      <Edit :travel="travel" @emit-update-desc="updateDescription" />
    </div>
    <div class="col-12 md:col-4" v-if="isOrganizer">
      <Participants :travel="travel" />
    </div>
  </div>
</template>

<script>
import Participants from "./Participants.vue";
import Edit from "./Edit.vue";
import Breadcrumb from "primevue/breadcrumb";
import PresentationTravel from "./PresentationTravel.vue";
import ProgressSpinner from "primevue/progressspinner";
import axios from "axios";

export default {
  name: "TravelDetails",
  components: {
    Participants,
    Edit,
    Breadcrumb,
    PresentationTravel,
    ProgressSpinner,
  },
  data() {
    return {
      travel: null,
      isOrganizer: false,
      isParticipant: true,
      home: { icon: "pi pi-home", to: "/" },
      items: [{ label: "Mes voyages", to: "/travels" }, { label: "Voyage" }],
      travelsLoading: true,
    };
  },
  created() {
    axios
      .get("http://localhost:8080/trips/" + this.$route.params.id)
      .then((response) => {
        this.travelsLoading = false;
        this.travel = response.data;
        this.isOrganizer =
          JSON.parse(sessionStorage.getItem("user")).id ===
          this.travel.organisateur.id;

        axios
          .get(
            "http://localhost:8080/trips/isParticipant/" + this.$route.params.id
          )
          .then((reponse) => {
            this.isParticipant = reponse.data;
          })
      })
      .catch(() => {
        this.$router.push({
          name: "travels",
        });
      });
  },
  methods: {
    updateDescription(payload) {
      axios
        .post(
          "http://localhost:8080/trips/" + this.travel.id + "/description",
          {
            description: payload.description,
          }
        )
        .then(() => (this.travel.description = payload.description));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

